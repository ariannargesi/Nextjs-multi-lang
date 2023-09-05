"use client";
import { useParams } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { NextRequest } from "next/server";
import { ReactNode, useEffect, useState } from "react";

interface Props extends LinkProps {
  children: ReactNode
}

const CustomLink = (props: Props) => {
  const params = useParams();
  let href = '/'
  if(params.lang !== 'en')
        href += (params.lang as string) + props.href
  return <Link {...props} href={href} />;
};

export default CustomLink;
