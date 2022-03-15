from constructs import Construct
from aws_cdk import (
    Stack,
    aws_ec2 as ec2,
    aws_ecs as ecs,
    aws_ecs_patterns as ecs_patterns,
)

class FargateStack(Stack):

    def __init__(self, scope: Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        vpc = ec2.Vpc(self, "VPC")

        cluster = ecs.Cluster(self, "Cluster",
           vpc=vpc
        )

        Image = ecs_patterns.ApplicationLoadBalancedTaskImageOptions(
                image=ecs.ContainerImage.from_registry("amazon/amazon-ecs-sample")
            )

        load_balanced_fargate_service = ecs_patterns.ApplicationLoadBalancedFargateService(self, "Service",
            cluster=cluster,
            desired_count=2,
            task_image_options=Image
        )
