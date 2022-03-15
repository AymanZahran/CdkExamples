"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FargateStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const ec2 = require("aws-cdk-lib/aws-ec2");
const ecs = require("aws-cdk-lib/aws-ecs");
const ecs_patterns = require("aws-cdk-lib/aws-ecs-patterns");
class FargateStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const vpc = new ec2.Vpc(this, 'TheVPC');
        const cluster = new ecs.Cluster(this, "Cluster", {
            vpc: vpc
        });
        const load_balanced_fargate_service = new ecs_patterns.ApplicationLoadBalancedFargateService(this, "Service", {
            cluster: cluster,
            desiredCount: 2,
            taskImageOptions: {
                image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample")
            }
        });
    }
}
exports.FargateStack = FargateStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFyZ2F0ZS1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhcmdhdGUtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQWdEO0FBRWhELDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsNkRBQTZEO0FBRTdELE1BQWEsWUFBYSxTQUFRLG1CQUFLO0lBQ3JDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBa0I7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUV2QyxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUMvQyxHQUFHLEVBQUUsR0FBRztTQUNULENBQUMsQ0FBQTtRQUVGLE1BQU0sNkJBQTZCLEdBQUcsSUFBSSxZQUFZLENBQUMscUNBQXFDLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUM1RyxPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsQ0FBQztZQUNmLGdCQUFnQixFQUFFO2dCQUNoQixLQUFLLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUM7YUFDbkU7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUFqQkQsb0NBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGVjMiBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZWMyJztcbmltcG9ydCAqIGFzIGVjcyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZWNzJztcbmltcG9ydCAqIGFzIGVjc19wYXR0ZXJucyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZWNzLXBhdHRlcm5zJztcblxuZXhwb3J0IGNsYXNzIEZhcmdhdGVTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG4gICAgY29uc3QgdnBjID0gbmV3IGVjMi5WcGModGhpcywgJ1RoZVZQQycpXG5cbiAgICBjb25zdCBjbHVzdGVyID0gbmV3IGVjcy5DbHVzdGVyKHRoaXMsIFwiQ2x1c3RlclwiLCB7XG4gICAgICB2cGM6IHZwY1xuICAgIH0pXG5cbiAgICBjb25zdCBsb2FkX2JhbGFuY2VkX2ZhcmdhdGVfc2VydmljZSA9IG5ldyBlY3NfcGF0dGVybnMuQXBwbGljYXRpb25Mb2FkQmFsYW5jZWRGYXJnYXRlU2VydmljZSh0aGlzLCBcIlNlcnZpY2VcIiwge1xuICAgICAgY2x1c3RlcjogY2x1c3RlcixcbiAgICAgIGRlc2lyZWRDb3VudDogMixcbiAgICAgIHRhc2tJbWFnZU9wdGlvbnM6IHtcbiAgICAgICAgaW1hZ2U6IGVjcy5Db250YWluZXJJbWFnZS5mcm9tUmVnaXN0cnkoXCJhbWF6b24vYW1hem9uLWVjcy1zYW1wbGVcIilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=