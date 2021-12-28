# commandos:

yarn init -y

yarn add express --save
yarn add @types/express -D

yarn add typescript -D
yarn add ts-node-dev -D
yarn tsc --init

yarn add express-async-errors --save

yarn add typeorm --save
yarn add reflect-metadata --save
yarn add mysql2 --save

yarn typeorm migration:run
yarn typeorm migration:create -n <Nome>
yarn typeorm entity:create -n <Nome>
