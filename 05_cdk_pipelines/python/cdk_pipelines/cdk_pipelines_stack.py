from constructs import Construct
from aws_cdk import (
    Stack,
    aws_codecommit as codecommit,
    pipelines as pipelines,
)
from .pipeline_stage import PipelineStage

class CdkPipelinesStack(Stack):

    def __init__(self, scope: Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        repo = codecommit.Repository(
            self, 'cdkPipelinesRepo',
            repository_name= "cdkPipelinesRepo"
        )

        # Pipeline code goes here
        pipeline = pipelines.CodePipeline(
            self,
            "cdkPipelines",
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
        deploy = PipelineStage(self, "Deploy")
        deploy_stage = pipeline.add_stage(deploy)

