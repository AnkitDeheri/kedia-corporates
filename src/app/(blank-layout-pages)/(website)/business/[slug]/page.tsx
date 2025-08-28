import BusinessClient from "@/components/business/BusinessClient";
import React from "react";
import { useRouter } from "next/router";

const BusinessClientPage = ({ slug }: { slug: string }) => {
  return (
    <div>
      <BusinessClient slug={slug} />
    </div>
  );
};

export async function getServerSideProps(context: { params: { slug: string } }) {
  const { slug } = context.params;

  return {
    props: {
      slug,
    },
  };
}

export default BusinessClientPage;