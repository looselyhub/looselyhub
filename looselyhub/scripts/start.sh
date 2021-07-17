rootDir=$(pwd)
if [ -d "../RELEASE" ]; then
  sudo rm -R ../RELEASE
  echo "../RELEASE removed"
fi
cd ..
rsync -av --progress ./ ./RELEASE --exclude-from ./rsync_exclude.txt