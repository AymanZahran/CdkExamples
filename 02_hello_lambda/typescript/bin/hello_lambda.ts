#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HelloLambdaStack } from '../lib/hello_lambda-stack';

const app = new cdk.App();
new HelloLambdaStack(app, 'HelloLambdaStack');