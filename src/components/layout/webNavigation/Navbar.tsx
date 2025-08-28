"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { useTheme as useNextTheme } from "next-themes";

import ThemeToggle from "@/components/custom/themeToggle/ThemeToggle";

const Navbar = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  // next-themes setup
  const { resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check initial scroll position
    setMounted(true);

    const onScroll = () => setScrolled(window.scrollY > 50);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Colors
  const COLORS = {
    gray400: "#4b5563", // Tailwind text-gray-400
    gray900: "#111827",
    black: "#000000",
    white: "#FFFFFF",
    darkNavBg: "#101827",
    lightNavBg: "#FFFFFF",
  };

  // Enhanced theme detection with multiple fallbacks
  const getIsDark = () => {
    if (mounted) {
      return resolvedTheme === "dark";
    }

    // Fallback during SSR/initial render
    if (typeof window !== "undefined") {
      // Check for class on html element (next-themes sets this)
      if (document.documentElement.classList.contains("dark")) {
        return true;
      }

      if (document.documentElement.classList.contains("light")) {
        return false;
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return false; // Default to light theme during SSR
  };

  const isDark = getIsDark();
  const bgScrolled = isDark ? COLORS.darkNavBg : COLORS.lightNavBg;
  const textOnScrolled = isDark ? COLORS.gray400 : COLORS.black;
  const textOnTransparent = COLORS.white;

  const currentTextColor = scrolled ? textOnScrolled : textOnTransparent;

  // Define menu items with their routes
  const menuItems = [
    { label: "STORY", href: "/story" },
    { label: "BUSINESSES", href: "/business" },
    { label: "RESPONSIBILITY", href: "/responsibility" },
    { label: "MEDIA", href: "/media" },
    { label: "CONTACT", href: "/contact" },
  ];

  // Handle mobile menu item click
  const handleMobileMenuClick = () => {
    setOpen(false);
  };

  // Common button styles for consistency
  const buttonStyles = {
    color: "inherit",
    fontSize: "1rem",
    textTransform: "uppercase",
    fontWeight: 500,
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  };

  // Prevent flash by using opacity during initial render
  const navbarStyles = {
    px: { xs: 2, md: 63 },
    bgcolor: scrolled ? bgScrolled : "transparent",
    color: currentTextColor,
    transition:
      "background-color 0.3s ease, color 0.3s ease, opacity 0.2s ease",
    py: 3,
    zIndex: (theme: { zIndex: { drawer: number } }) => theme.zIndex.drawer - 1,
    opacity: mounted ? 1 : 0.9, // Slight opacity during initial render
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        color="transparent"
        sx={navbarStyles}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Link href="/" passHref legacyBehavior>
            <Typography
              component="a"
              variant="h4"
              sx={{
                fontWeight: "light",
                color: "inherit",
                fontSize: { xs: "1.5rem", md: "2rem" },
                textDecoration: "none",
                cursor: "pointer",
                transition: "opacity 0.3s ease",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              KEDIA CORPORATES123
            </Typography>
          </Link>

          <Box sx={{ flex: 1 }} />

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <Link key={item.label} href={item.href} passHref legacyBehavior>
                  <Button
                    component="a"
                    sx={{
                      ...buttonStyles,
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>
          )}

          <ThemeToggle />

          {isMobile && (
            <IconButton
              sx={{
                color: "inherit",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: isDark ? "#101827" : "#ffffff",
            color: isDark ? COLORS.gray400 : COLORS.gray900,
            zIndex: (theme) => theme.zIndex.drawer + 2,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              color: "inherit",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} passHref legacyBehavior>
              <ListItemButton
                component="a"
                onClick={handleMobileMenuClick}
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
