# commands to run

docker run -p 2181:2181 zookeeper

docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=192.168.0.134:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.0.134:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka