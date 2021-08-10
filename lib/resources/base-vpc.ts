import {Stack} from "@aws-cdk/core";
import {IVpc, SubnetConfiguration, Vpc} from "@aws-cdk/aws-ec2";
import {IVpcProps} from "../props/vpc-props";
import {VpcConfig} from "../../config/vpc-config";

export class BaseVpc{

    private readonly appName: string;
    private readonly stack: Stack;
    private vpcConfig : IVpcProps;

    constructor(stack: Stack) {
        this.appName = stack.node.tryGetContext("appName");
        this.vpcConfig = VpcConfig;
        this.stack = stack;
    }

    public createNewVpc = (): IVpc => {
        return new Vpc(this.stack, `${this.appName}-VPC`, {
            cidr: this.vpcConfig.cidr,
            maxAzs: this.vpcConfig.maxAzs,
            natGateways: this.vpcConfig.natGateways,
            subnetConfiguration: this.getSubnetConfiguration(),
        });
    }

    private getSubnetConfiguration = (): SubnetConfiguration[] => {
        const subnetConfig : SubnetConfiguration[] = [];
        for(let subnetType of this.vpcConfig.subnetTypes) {
            subnetConfig.push(
                {
                    cidrMask: this.vpcConfig.cidrMask,
                    subnetType: subnetType,
                    name: subnetType,
                    reserved: false
                }
            )
        }
        return subnetConfig;
    }
}