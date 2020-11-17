BASEDIR="$1"

echo "Basedir => ${BASEDIR}"

sudo sam local start-api \
  --template ./template.yaml \
  --host 0.0.0.0 \
  --port 3001 \
  --docker-volume-basedir "${BASEDIR}/sam_app/"
