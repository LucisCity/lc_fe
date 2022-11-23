#/bin/bash
echo "Start deploy app with ISR"
echo "Please ensure you've GIT PULL & preprare .env in your project BEFORE"

docker compose up --build -d
# docker network connect lc_network lc_fe_isr-app-1

#
# Check if the stack start successfully
#
DC_OUTPUT=`docker compose top`
echo $DC_OUTPUT 

if [ -n "$DC_OUTPUT" ] 
then
    echo "Deploy successfully"
else
    # exit with error so CI/CD know that docker deployment was failed
    echo "Deploy FAILED"
    exit 1
fi
