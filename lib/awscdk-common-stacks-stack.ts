import * as cdk from '@aws-cdk/core';
import {IVpc} from "@aws-cdk/aws-ec2";
import {BaseVpc} from "./resources/base-vpc";

export class AwscdkCommonStacksStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.createVpc();
  }

  private createVpc = () : IVpc => {
    return new BaseVpc(this).createNewVpc();
  }
}
