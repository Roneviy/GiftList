# Gift List

To get started with the repository, clone it and then run `npm install` in the top-level directory to install the depedencies.

There are three folders in this repository:

## Client

You can run the client from the top-level directory with `node client/index`. This file is a script which will send an HTTP request to the server.

Think of the client as the _prover_ here. It needs to prove to the server that some `name` is in the `MERKLE_ROOT` on the server. 

## Server

You can run the server from the top-level directory with `node server/index`. This file is an express server which will be hosted on port 1225 and respond to the client's request.

Think of the server as the _verifier_ here. It needs to verify that the `name` passed by the client is in the `MERKLE_ROOT`. If it is, then we can send the gift! 

## Utils

There are a few files in utils:

- The `niceList.json` which contains all the names of the people who deserve a gift this year (this is randomly generated, feel free to add yourself and others to this list!)
- The `example.js` script shows how we can generate a root, generate a proof and verify that some value is in the root using the proof. Try it out from the top-level folder with `node/example.js`
- The `MerkleTree.js` should look familiar from the Merkle Tree module! This one has been modified so you should not have to deal with any crypto type conversion. You can import this in your client/server
- The `verifyProof.js` should also look familiar. This was the last stage in the module. You can use this function to prove a name is in the merkle root, as show in the example.

# Список подарков

Чтобы начать работу с репозиторием, склонируйте его и затем выполните `npm install` в корневом каталоге, чтобы установить зависимости.

В этом репозитории три папки:

## Клиент

Вы можете запустить клиент из корневого каталога с помощью `node client/index`. Этот файл является скриптом, который отправит HTTP-запрос на сервер.

Думайте о клиенте как о _проводнике_ здесь. Он должен доказать серверу, что некоторое `name` находится в `MERKLE_ROOT` на сервере.

## Сервер

Вы можете запустить сервер из корневого каталога с помощью `node server/index`. Этот файл является express-сервером, который будет размещен на порту 1225 и будет отвечать на запросы клиента.

Думайте о сервере как о _проверяющем_ здесь. Ему нужно проверить, что `name`, переданный клиентом, находится в `MERKLE_ROOT`. Если это так, тогда мы можем отправить подарок!

## Утилиты

Есть несколько файлов в утилитах:

- Файл `niceList.json`, который содержит все имена людей, которые заслуживают подарка в этом году (это случайно сгенерировано, не стесняйтесь добавлять себя и других в этот список!)
- Сценарий `example.js` показывает, как мы можем сгенерировать корень, сгенерировать доказательство и проверить, что какое-то значение находится в корне с помощью доказательства. Попробуйте это из корневого каталога с помощью `node/example.js`
- Файл `MerkleTree.js` должен выглядеть знакомо из модуля Merkle Tree! Он был изменен, поэтому вам не нужно иметь дело с какими-либо типами криптографии. Вы можете импортировать это в свой клиент/сервер
- Файл `verifyProof.js` также должен выглядеть знакомо. Это был последний этап в модуле. Вы можете использовать эту функцию, чтобы доказать, что имя находится в меркель-корне, как показано в примере.