import { Stack, StackProps } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns';
import { Construct } from 'constructs';

export class FargateStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const vpc = new ec2.Vpc(this, 'TheVPC');

    const cluster = new ecs.Cluster(this, 'Cluster', {
      vpc: vpc,
    });

    const load_balanced_fargate_service = new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'Service', {
      cluster: cluster,
      desiredCount: 2,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
      },
    });
  }
}
