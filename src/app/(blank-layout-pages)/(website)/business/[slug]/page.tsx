import BusinessClient from "@/components/business/BusinessClient";
import React from "react";

const BusinessClientPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <div>
      <BusinessClient slug={slug} />
    </div>
  );
};

export default BusinessClientPage;