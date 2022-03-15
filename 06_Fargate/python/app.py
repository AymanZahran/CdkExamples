#!/usr/bin/env python3

import aws_cdk as cdk

from fargate.fargate_stack import FargateStack

app = cdk.App()
FargateStack(app, "fargate")
app.synth()
