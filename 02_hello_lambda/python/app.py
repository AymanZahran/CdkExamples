#!/usr/bin/env python3

import aws_cdk as cdk

from hello_lambda.hello_lambda_stack import HelloLambdaStack


app = cdk.App()
HelloLambdaStack(app, "hello-lambda")

app.synth()
