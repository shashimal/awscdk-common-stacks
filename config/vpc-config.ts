import {IVpcProps} from "../lib/props/vpc-props";
import {SubnetType} from "@aws-cdk/aws-ec2";

export const VpcConfig : IVpcProps = {
    cidr: "10.1.0.0/16",
    cidrMask: 20,
    maxAzs: 3,
    natGateways: 0,
    subnetTypes: [SubnetType.PUBLIC, SubnetType.ISOLATED]
}