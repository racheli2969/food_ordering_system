CREATE DATABASE  IF NOT EXISTS `takeabitedb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `takeabitedb`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: takeabitedb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tblorderdetails`
--

DROP TABLE IF EXISTS `tblorderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblorderdetails` (
  `orderId` int NOT NULL,
  `productId` int NOT NULL,
  `orderDetailsId` int NOT NULL AUTO_INCREMENT,
  `amount` int DEFAULT NULL,
  `finalPrice` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`orderDetailsId`),
  KEY `orderId` (`orderId`),
  KEY `productId` (`productId`),
  CONSTRAINT `tblorderdetails_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `tblorders` (`orderId`),
  CONSTRAINT `tblorderdetails_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `tblproduct` (`productId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblorderdetails`
--

LOCK TABLES `tblorderdetails` WRITE;
/*!40000 ALTER TABLE `tblorderdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblorderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblorders`
--

DROP TABLE IF EXISTS `tblorders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblorders` (
  `orderId` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `storeId` int NOT NULL,
  `dateOrder` datetime NOT NULL DEFAULT (now()),
  `finalPrice` decimal(10,0) DEFAULT NULL,
  `city` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `street` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `numOfHouse` int DEFAULT NULL,
  `lastDigitsPay` varchar(4) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`orderId`),
  KEY `userId` (`userId`),
  KEY `idStore` (`storeId`),
  CONSTRAINT `tblorders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `tblusers` (`userId`),
  CONSTRAINT `tblorders_ibfk_2` FOREIGN KEY (`storeId`) REFERENCES `tblstores` (`storeId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblorders`
--

LOCK TABLES `tblorders` WRITE;
/*!40000 ALTER TABLE `tblorders` DISABLE KEYS */;
INSERT INTO `tblorders` VALUES (1,23,1,'2022-08-01 19:29:43',500,'tyt','yyy',5,'565');
/*!40000 ALTER TABLE `tblorders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblproduct`
--

DROP TABLE IF EXISTS `tblproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblproduct` (
  `productId` int NOT NULL AUTO_INCREMENT,
  `storeId` int NOT NULL,
  `productName` varchar(1000) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `photolink` varchar(1000) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`productId`),
  KEY `idStore` (`storeId`),
  CONSTRAINT `tblproduct_ibfk_1` FOREIGN KEY (`storeId`) REFERENCES `tblstores` (`storeId`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblproduct`
--

LOCK TABLES `tblproduct` WRITE;
/*!40000 ALTER TABLE `tblproduct` DISABLE KEYS */;
INSERT INTO `tblproduct` VALUES (5,1,'Ravioli',45,'undefined','null'),(6,1,'Pasta',28,NULL,NULL),(8,1,'Mushroom soup',29,NULL,NULL),(10,1,'Mushroom Quiche',45,NULL,NULL),(11,1,'Pizza Bianka',39,NULL,NULL),(12,2,'Shawarma',50,NULL,NULL),(13,2,'Entrecote',60,NULL,NULL),(14,2,'Chicken Breast',39,NULL,NULL),(15,2,'Baget with chnitzel',42,NULL,NULL),(16,2,'Hamburger',35,NULL,NULL),(17,2,'Sausages',32,NULL,NULL),(18,2,'kebab',32,NULL,NULL),(19,3,'Muufins',8,NULL,NULL),(20,3,'Mousse cake',79,NULL,NULL),(21,3,'Alfajores',10,NULL,NULL),(22,3,'mini chocolate cakes',25,NULL,NULL),(25,1,'lasagna',50,'undefined','extra toppings');
/*!40000 ALTER TABLE `tblproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblstores`
--

DROP TABLE IF EXISTS `tblstores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblstores` (
  `storeId` int NOT NULL AUTO_INCREMENT,
  `storeName` varchar(1000) DEFAULT NULL,
  `city` varchar(1000) DEFAULT NULL,
  `linkphoto` varchar(255) DEFAULT NULL,
  `openingHour` time DEFAULT NULL,
  `closingTime` time DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `delivery` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`storeId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblstores`
--

LOCK TABLES `tblstores` WRITE;
/*!40000 ALTER TABLE `tblstores` DISABLE KEYS */;
INSERT INTO `tblstores` VALUES (1,'BOLO','Rehovot','C:\\Users\\brach\\OneDrive\\מסמכים\\project\\server\\public\\data\\uploads\\images\\pizza.jpg','09:00:00','24:07:00','Dairy',30),(2,'Burger Ranch','Ashdod','server\\public\\data\\uploads\\images\\pizza.jpg','12:00:00','22:00:00','Meat',35),(3,'Sweet','Bnei Brak','server\\public\\data\\uploads\\images\\pizza.jpg','10:00:00','22:00:00','Sweet',25);
/*!40000 ALTER TABLE `tblstores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblusers`
--

DROP TABLE IF EXISTS `tblusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblusers` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `userType` int DEFAULT NULL,
  `lastStoreId` int DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblusers`
--

LOCK TABLES `tblusers` WRITE;
/*!40000 ALTER TABLE `tblusers` DISABLE KEYS */;
INSERT INTO `tblusers` VALUES (1,'david ','d@gmail.com','0583266170',1,NULL),(2,'dan','dan@gmail.com','0523878021',2,1),(3,'shira','s@gmail.com','0583266123',3,NULL),(4,'d','3@gmail.com','56556677',3,NULL),(5,'sara','sa@gmail.com','500000000',3,NULL),(6,'d','3ssssssssss5@gmail.com','56556677',3,NULL),(7,'d','3ssssssssssssssss@gmail.com','56556677',3,NULL),(8,'d','3nnnnnnnnnnnnnnnnn5@gmail.com','56556677',3,NULL),(9,'d','3xxxxxxxxxxxxxxx5@gmail.com','56556677',3,NULL),(10,'d','cccccccccc3@gmail.com','56556677',3,NULL),(11,'chaya','c@gmail.com','56556677',3,NULL),(12,'d','3444@gmail.com','56556677',3,NULL),(13,'d','32@ghbgh.jhu','333',3,NULL),(14,'rachel','r@gmail.com','583266170',3,NULL),(15,'racheliii','rt@gmail.com','583266170',3,NULL),(16,'rachelii','rt444@gmail.com','583266170',3,NULL),(17,'rachel','rgg@gmail.com','583266170',3,NULL),(18,'rachel','danttt@gmail.com','583266170',3,NULL),(19,'rachel','danyy@gmail.com','583266170',3,NULL),(20,'rachel','dantt@gmail.com','583266170',3,NULL),(21,'p','undefined','26510',3,NULL),(22,'p','undefined','26510',3,NULL),(23,'p','brachapokroy@gmail.com','26510',3,NULL);
/*!40000 ALTER TABLE `tblusers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-01 22:01:01
