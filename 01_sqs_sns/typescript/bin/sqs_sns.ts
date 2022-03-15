#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SqsSnsStack } from '../lib/sqs_sns-stack';

const app = new cdk.App();

new SqsSnsStack(app, 'SqsSnsStack');