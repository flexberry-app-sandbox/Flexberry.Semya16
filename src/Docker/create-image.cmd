docker build --no-cache -f SQL\Dockerfile.PostgreSql -t semya16/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t semya16/app ../..
