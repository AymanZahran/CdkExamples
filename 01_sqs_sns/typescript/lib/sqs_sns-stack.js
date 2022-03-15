"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqsSnsStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const sqs = require("aws-cdk-lib/aws-sqs");
class SqsSnsStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const queue = new sqs.Queue(this, 'SqsSnsQueue', {
            visibilityTimeout: cdk.Duration.seconds(300)
        });
    }
}
exports.SqsSnsStack = SqsSnsStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FzX3Nucy1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNxc19zbnMtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQWdEO0FBRWhELDJDQUEyQztBQUUzQyxNQUFhLFdBQVksU0FBUSxtQkFBSztJQUNwQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQWtCO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQy9DLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztTQUM3QyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFSRCxrQ0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNrLCBTdGFja1Byb3BzIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBzcXMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXNxcyc7XG5cbmV4cG9ydCBjbGFzcyBTcXNTbnNTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBxdWV1ZSA9IG5ldyBzcXMuUXVldWUodGhpcywgJ1Nxc1Nuc1F1ZXVlJywge1xuICAgICAgdmlzaWJpbGl0eVRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDMwMClcbiAgICB9KTtcbiAgfVxufVxuIl19