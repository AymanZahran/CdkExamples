#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkPipelinesStack } from '../lib/cdk_pipelines-stack';

const app = new cdk.App();
new CdkPipelinesStack(app, 'CdkPipelinesStack');