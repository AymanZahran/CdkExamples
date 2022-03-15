#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LambdaApigwStack } from '../lib/lambda_apigw-stack';

const app = new cdk.App();
new LambdaApigwStack(app, 'LambdaApigwStack');