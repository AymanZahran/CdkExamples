#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ServerlessFargatePipelineStack } from '../lib/serverless_fargate_pipeline-stack';

const app = new cdk.App();
new ServerlessFargatePipelineStack(app, 'ServerlessFargatePipelineStack');