from constructs import Construct
from aws_cdk import (
    Stack,
    aws_codecommit as codecommit,
    pipelines as pipelines,
)

from constructs import Construct
from .serverless_stage import ServerlessStage
from .fargate_stage import FargateStage

class ServerlessFargatePipelineStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        
        repo = codecommit.Repository(
            self, 'AymanRepoCDK',
            repository_name= "AymanRepoCDK"
        )

        pipeline = pipelines.CodePipeline(
            self,
            "AymanPipelineCDK",
            synth=pipelines.ShellStep(
                "Synth",
                input=pipelines.CodePipelineSource.code_commit(repo, "master"),
                commands=[
                    "npm install -g aws-cdk",  # Installs the cdk cli on Codebuild
                    "pip install -r requirements.txt",  # Instructs Codebuild to install required packages
                    "npx cdk synth",
                ]
            ),
        )

        serverless = ServerlessStage(self, "ServerlessStage")
        serverless_stage = pipeline.add_stage(serverless)

        fargate = FargateStage(self, "FargateStage")
        fargate_stage = pipeline.add_stage(fargate)


