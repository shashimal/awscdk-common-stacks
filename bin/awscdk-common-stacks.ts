#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwscdkCommonStacksStack } from '../lib/awscdk-common-stacks-stack';

const app = new cdk.App();
new AwscdkCommonStacksStack(app, 'AwscdkCommonStacksStack', {
  env: { account: '999320943081', region: 'us-east-1' },
});
