from constructs import Construct
from aws_cdk import (
    Stage
)
from .fargate_stack import FargateStack

class FargateStage(Stage):

    def __init__(self, scope: Construct, id: str, **kwargs):
        super().__init__(scope, id, **kwargs)

        service = FargateStack(self, 'FargateStack')