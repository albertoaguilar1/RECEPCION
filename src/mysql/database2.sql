CREATE DATABASE dbrestaurante;

SELECT * FROM dbrestaurante.order_item;CREATE TABLE `item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subtotal` int NOT NULL,
  `vat` int NOT NULL,
  `total` int NOT NULL,
  `token` varchar(255) NOT NULL,
  `total_items` int NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `order_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderId` int DEFAULT NULL,
  `itemId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_e03f3ed4dab80a3bf3eca50bab` (`itemId`),
  KEY `FK_646bf9ece6f45dbe41c203e06e0` (`orderId`),
  CONSTRAINT `FK_646bf9ece6f45dbe41c203e06e0` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`),
  CONSTRAINT `FK_e03f3ed4dab80a3bf3eca50babc` FOREIGN KEY (`itemId`) REFERENCES `item` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
