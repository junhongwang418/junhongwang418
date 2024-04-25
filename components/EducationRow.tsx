import React from "react";
import { HTMLAttributes, HTMLProps } from "react";
import { HStack } from "./HStack";
import { VStack } from "./VStack";
import { Card, CardContent, CardHeader } from "./ui/Card";
import Link from "next/link";

interface EducationRowProps {
  school: string;
  degree: string;
  graduationDate: string;
  logoSrc: string;
  href: string;
}

export const EducationRow = (props: EducationRowProps) => {
  const { school, degree, graduationDate, logoSrc, href } = props;

  return (
    <Link href={href} target="_blank">
      <Card className="opacity-80 hover:opacity-100 bg-opacity-80 hover:bg-opacity-100">
        <CardHeader>
          <img src={logoSrc} width="48" height="48" />
        </CardHeader>
        <CardContent>
          <VStack>
            <div className="text-lg font-bold text-foregound">{school}</div>
            <div className="text-primary/50 texs-sm">{degree}</div>
            <div className="text-primary/50 text-sm">{graduationDate}</div>
          </VStack>
        </CardContent>
      </Card>
    </Link>
  );
};
