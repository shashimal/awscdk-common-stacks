import {SubnetType} from "@aws-cdk/aws-ec2";

export interface IVpcProps {
    cidr: string;
    natGateways: number;
    maxAzs: number;
    subnetTypes: SubnetType[];
    cidrMask: number
}