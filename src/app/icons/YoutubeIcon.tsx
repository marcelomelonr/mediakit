import * as React from "react";
import { SVGProps } from "react";

export const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" viewBox={`0 0 16 16`} {...props}>
    <path
      fill={props.color ?? "#ED243A"}
      d="M15.84 4.8s-.156-1.103-.637-1.587c-.61-.638-1.29-.641-1.603-.679-2.237-.162-5.597-.162-5.597-.162h-.006s-3.36 0-5.597.162c-.313.038-.994.041-1.603.679C.316 3.697.162 4.8.162 4.8S0 6.097 0 7.39v1.213c0 1.294.16 2.59.16 2.59s.156 1.104.634 1.588c.61.638 1.41.616 1.765.685 1.282.122 5.441.16 5.441.16s3.363-.007 5.6-.167c.313-.037.994-.04 1.603-.678.481-.484.638-1.587.638-1.587S16 9.9 16 8.604V7.39c0-1.294-.16-2.59-.16-2.59Zm-9.493 5.275V5.578l4.322 2.256-4.322 2.241Z"
    />
  </svg>
);
