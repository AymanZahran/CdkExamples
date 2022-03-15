import yaml
import json

Inputs = [
  "./01_sqs_sns/cdk.out/tree.json",
  "./02_hello_lambda/cdk.out/tree.json",
  "./03_lambda_apigw/cdk.out/tree.json",
  "./04_serverless/cdk.out/tree.json",
  "./05_cdk_pipelines/cdk.out/tree.json",
  "./06_Fargate/cdk.out/tree.json",
  "./07_ServerlessFargatePipeline/cdk.out/tree.json",
  "./08_ProjenServerlessFargatePipeline/cdk.out/tree.json"
]

Outputs = [
  "TreeOutput/01_sqs_sns.txt",
  "TreeOutput/02_hello_lambda.txt",
  "TreeOutput/03_lambda_apigw.txt",
  "TreeOutput/04_serverless.txt",
  "TreeOutput/05_cdk_pipelines.txt",
  "TreeOutput/06_Fargate.txt",
  "TreeOutput/07_ServerlessFargatePipeline.txt",
  "TreeOutput/08_ProjenServerlessFargatePipeline.txt"
]

def GetTree(Tree, indentation, file):
  file.write(' ' * indentation + "id   :  " + Tree["id"] + "\n")
  file.write(' ' * indentation + "path :  " + Tree["path"] + "\n")
  file.write(' ' * indentation + "lib  :  " + Tree["constructInfo"]["fqn"] + "\n")
  if "attributes" in Tree:
    file.write(' ' * indentation + "attributes  :  " + "\n")
    for line in yaml.dump(Tree["attributes"]).splitlines():
      file.write(' ' * (indentation + 4) + line + "\n")
  if "children" in Tree:
    for Child in Tree["children"]:
      GetTree(Tree["children"][Child], indentation + 4, file)

for FileCount in range(8):
  file = open(Inputs[FileCount])
  data = json.load(file)
  Tree = data["tree"]
  file.close()
  with open(Outputs[FileCount], "w") as file:
    GetTree(Tree, 0, file)
  file.close()
