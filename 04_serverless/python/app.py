#!/usr/bin/env python3

import aws_cdk as cdk

from serverless.serverless_stack import ServerlessStack


app = cdk.App()
ServerlessStack(app, "serverless")

app.synth()
