from constructs import Construct
from aws_cdk import (
    Stage
)
from .serverless_stack import ServerlessStack

class ServerlessStage(Stage):

    def __init__(self, scope: Construct, id: str, **kwargs):
        super().__init__(scope, id, **kwargs)

        service = ServerlessStack(self, 'ServerlessStack')