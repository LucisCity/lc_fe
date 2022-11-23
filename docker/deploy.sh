#/bin/bash
echo "Start deploy app with ISR"
echo "Please ensure you've GIT PULL & preprare .env in your project BEFORE"

docker compose up --build -d
# docker network connect lc_network lc_fe_isr-app-1

#
# Check if the stack start successfully
#
sleep 2
UP_SECONDS_AGO=`d ps | grep 'lc_fe_isr-app-1' | grep 'seconds'`
echo $UP_SECONDS_AGO

if [ -n "$UP_SECONDS_AGO" ]
then
    echo "Deploy successfully"
else
    # exit with error so CI/CD know that docker deployment was failed
    echo "Deploy FAILED"
    exit 1
fi
