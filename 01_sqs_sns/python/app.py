#!/usr/bin/env python3

import aws_cdk as cdk

from sqs_sns.sqs_sns_stack import SqsSnsStack


app = cdk.App()
SqsSnsStack(app, "sqs-sns")

app.synth()
