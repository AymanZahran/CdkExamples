#!/usr/bin/env python3

import aws_cdk as cdk

from lambda_apigw.lambda_apigw_stack import LambdaApigwStack


app = cdk.App()
LambdaApigwStack(app, "lambda-apigw")

app.synth()
