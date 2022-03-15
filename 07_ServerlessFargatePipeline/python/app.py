#!/usr/bin/env python3
import os

import aws_cdk as cdk

from ServerlessFargatePipeline.serverless_fargate_pipeline_stack import ServerlessFargatePipelineStack

app = cdk.App()
ServerlessFargatePipelineStack(app, "cdk-pipelines")
app.synth()
