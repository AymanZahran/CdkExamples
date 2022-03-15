#!/usr/bin/env python3

import aws_cdk as cdk

from cdk_pipelines.cdk_pipelines_stack import CdkPipelinesStack


app = cdk.App()
CdkPipelinesStack(app, "cdk-pipelines")

app.synth()
