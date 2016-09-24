-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 50.62.209.119:3306
-- Generation Time: Sep 24, 2016 at 11:52 AM
-- Server version: 5.5.43-37.2-log
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `file4599`
--
CREATE DATABASE IF NOT EXISTS `file4599` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `file4599`;

-- --------------------------------------------------------

--
-- Table structure for table `parking_ticket`
--

CREATE TABLE `parking_ticket` (
  `parking_ticket_id` varchar(12) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `apt` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `province` varchar(45) DEFAULT NULL,
  `pin_code` varchar(6) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `offence_accept` enum('0','1') DEFAULT NULL,
  `trial_lang` varchar(45) DEFAULT NULL,
  `trial_lang_ip` varchar(45) DEFAULT NULL,
  `signature` varchar(45) DEFAULT NULL,
  `notice_number` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `parking_ticket`
--

INSERT INTO `parking_ticket` (`parking_ticket_id`, `name`, `address`, `apt`, `city`, `province`, `pin_code`, `phone`, `offence_accept`, `trial_lang`, `trial_lang_ip`, `signature`, `notice_number`) VALUES
('PKNzQil', 'siva', 'chennai', 'kpm', 'chennai', 'tamilnadu', '601301', '9790280707', '1', 'english', '', '', 'pk123456');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `payment_id` int(11) NOT NULL,
  `ticket_id` varchar(11) NOT NULL,
  `txn_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `payment_amt` float NOT NULL,
  `currency_code` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `payer_email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `payment_status` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`payment_id`, `ticket_id`, `txn_id`, `payment_amt`, `currency_code`, `payer_email`, `payment_status`) VALUES
(1, 'PKNzQil', '0M282922R3116645L', 5, 'USD', 'buyer@sqindia.net', 'Completed'),
(2, 'PKNzQil', '0M282922R3116645L', 5, 'USD', 'buyer@sqindia.net', 'Completed'),
(3, 'RLj9Smn', '3TB16446BW751362W', 5, 'USD', 'buyer@sqindia.net', 'Completed'),
(4, 'RLj9Smn', '3TB16446BW751362W', 5, 'USD', 'buyer@sqindia.net', 'Completed');

-- --------------------------------------------------------

--
-- Table structure for table `red_light_ticket`
--

CREATE TABLE `red_light_ticket` (
  `red_light_ticket_id` varchar(12) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `apt` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `province` varchar(45) DEFAULT NULL,
  `pin_code` varchar(6) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `offence_accept` enum('0','1') DEFAULT NULL,
  `trial_lang` varchar(45) DEFAULT NULL,
  `trial_lang_ip` varchar(45) DEFAULT NULL,
  `signature` varchar(45) DEFAULT NULL,
  `notice_number` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `red_light_ticket`
--

INSERT INTO `red_light_ticket` (`red_light_ticket_id`, `name`, `address`, `apt`, `city`, `province`, `pin_code`, `phone`, `offence_accept`, `trial_lang`, `trial_lang_ip`, `signature`, `notice_number`) VALUES
('RLj9Smn', 'raja', 'chennai', 'kpm', 'chennai', 'tamilnadu', '601301', '9790280707', '1', NULL, '', '', 'rl123456');

-- --------------------------------------------------------

--
-- Table structure for table `service_charge`
--

CREATE TABLE `service_charge` (
  `id` int(3) NOT NULL,
  `ticket_name` varchar(45) NOT NULL,
  `ticket_price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `service_charge`
--

INSERT INTO `service_charge` (`id`, `ticket_name`, `ticket_price`) VALUES
(1, 'parking_tkt', 5),
(2, 'traffic_tkt', 5),
(3, 'red_light_tkt', 5);

-- --------------------------------------------------------

--
-- Table structure for table `ticket_points`
--

CREATE TABLE `ticket_points` (
  `id` int(11) NOT NULL,
  `point_name` varchar(250) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ticket_points`
--

INSERT INTO `ticket_points` (`id`, `point_name`) VALUES
(1, '7 POINTS - Driving under suspension'),
(2, '7 POINTS - Failing to remain at scene of accident'),
(3, '7 POINTS - Driver failing to stop when signalled to stop by a police officer'),
(4, '7 POINTS - Racing'),
(5, '7 POINTS - Stunt'),
(6, '6 POINTS - Careless driving'),
(7, '6 POINTS - Exceeding speed limit by 50 km/h or more'),
(8, '6 POINTS - Improper driving where highway divided into lanes'),
(9, '6 POINTS - Failing to stop for school bus'),
(10, '5 POINTS - Driver of public vehicle or school bus failing to stop at railway crossings'),
(11, '4 POINTS - Following too closely'),
(12, '4 POINTS - Exceeding speed limit by 30 to 49 km/h'),
(13, '3 POINTS - Exceeding speed limit by 16 to 29 km/h'),
(14, '3 POINTS - Driving through, around or under railway crossing barrier'),
(15, '3 POINTS - Failing to yield right of way'),
(16, '3 POINTS - Failing to obey a stop sign, signal light or railway crossing signal'),
(17, '3 POINTS - Failing to obey directions of police constable'),
(18, '3 POINTS - Driving or operating a vehicle on a closed highway'),
(19, '3 POINTS - Failing to report an accident'),
(20, '3 POINTS - Improper passing'),
(21, '3 POINTS - Crowding driver\'s seat'),
(22, '3 POINTS - Drive wrong way - divided highway'),
(23, '3 POINTS - Cross divided highway - no proper crossing provided'),
(24, '3 POINTS - Wrong way in one way street or highway'),
(25, '3 POINTS - Pedestrian crossover'),
(26, '3 POINTS - Failing to slow down when approaching emergency vehicle'),
(27, '3 POINTS - Failing to move into another lane when approaching emergency vehicle'),
(28, '3 POINTS - Motor vehicle equipped with a speed measuring warning device'),
(29, '3 POINTS - Improper use of high occupancy vehicle lane'),
(30, '3 POINTS - Failing to obey traffic control stop sign'),
(31, '3 POINTS - Failing to obey traffic control slow sign'),
(32, '3 POINTS - Failing to obey school crossing stop sign'),
(33, '2 POINTS - Failing to share road'),
(34, '2 POINTS - Improper right turn'),
(35, '2 POINTS - Improper left turn'),
(36, '2 POINTS - Failing to signal'),
(37, '2 POINTS - Unnecessary slow driving'),
(38, '2 POINTS - Failing to lower headlamp beam'),
(39, '2 POINTS - Improper opening of vehicle door'),
(40, '2 POINTS - Prohibited turns'),
(41, '2 POINTS - Towing of persons on toboggans, bicycles, skis, etc'),
(42, '2 POINTS - Failing to obey signs prescribed by regulation under subsection 182 (1)'),
(43, '2 POINTS - Driver failing to wear complete seat belt assembly'),
(44, '2 POINTS - Driver failing to ensure passenger under 16 years wears seat belt assembly'),
(45, '2 POINTS - Driver failing to ensure infant passenger is secured as prescribed'),
(46, '2 POINTS - Driver failing to ensure toddler passenger is secured as prescribed'),
(47, '2 POINTS - Driver failing to ensure child passenger is secured as prescribed'),
(48, '2 POINTS - Backing on highway'),
(49, 'Impaired Driving/Over 80');

-- --------------------------------------------------------

--
-- Table structure for table `tickets_filed`
--

CREATE TABLE `tickets_filed` (
  `ticket_id` varchar(12) NOT NULL,
  `table_name` varchar(45) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `ticket_name` varchar(45) NOT NULL,
  `offence_date` varchar(12) NOT NULL,
  `filed_date` datetime NOT NULL,
  `amount` double NOT NULL,
  `payment_status` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tickets_filed`
--

INSERT INTO `tickets_filed` (`ticket_id`, `table_name`, `customer_name`, `email`, `ticket_name`, `offence_date`, `filed_date`, `amount`, `payment_status`) VALUES
('PKNzQil', 'parking_ticket', 'siva', 'siva@sqindia.net', 'Parking Ticket', '09/01/2016', '2016-09-06 08:39:02', 5, 'Completed'),
('RLj9Smn', 'red_light_ticket', 'raja', 'siva@sqindia.net', 'Red Light Ticket', '09/02/2016', '2016-09-06 08:43:36', 5, 'Completed'),
('TRjVA7g', 'traffic_ticket', 'Sriram', 'sri@vagansinc.com', 'Traffic Ticket', '09/07/2016', '2016-09-07 09:42:59', 5, 'Not Paid'),
('TRoKsWt', 'traffic_ticket', 'suresh', 'siva@sqindia.net', 'Traffic Ticket', '09/03/2016', '2016-09-06 08:47:28', 5, 'Not Paid'),
('TRY15IB', 'traffic_ticket', 'Sriram rangan', 'sri@vagansinc.com', 'Traffic Ticket', '09/07/2016', '2016-09-07 11:58:44', 5, 'Not Paid');

-- --------------------------------------------------------

--
-- Table structure for table `traffic_ticket`
--

CREATE TABLE `traffic_ticket` (
  `traffic_ticket_id` varchar(12) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `apt` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `province` varchar(45) DEFAULT NULL,
  `pin_code` varchar(6) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `offence_accept` enum('0','1') DEFAULT NULL,
  `trial_lang` varchar(45) DEFAULT NULL,
  `trial_lang_ip` varchar(45) DEFAULT NULL,
  `signature` varchar(45) DEFAULT NULL,
  `notice_number` varchar(45) DEFAULT NULL,
  `icon` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `traffic_ticket`
--

INSERT INTO `traffic_ticket` (`traffic_ticket_id`, `name`, `address`, `apt`, `city`, `province`, `pin_code`, `phone`, `offence_accept`, `trial_lang`, `trial_lang_ip`, `signature`, `notice_number`, `icon`) VALUES
('TRjVA7g', 'Sriram', '1234 anystreet', 'McLevin', 'Toronto', 'ON-ONTARIO', '123456', '4164738472', '1', NULL, '', 'Sriram', '4567', '1234567'),
('TRoKsWt', 'suresh', 'chennai', 'kpm', 'chennai', 'tamilnadu', '601301', '9790280707', '1', NULL, '', '', 'tr12456', 'icon456'),
('TRY15IB', 'Sriram rangan', '8130 Sheppard Ave.', '104', 'Scarborough', 'Ontario', '123456', '4164738472', '1', NULL, 'Tamil', 'Sriram Rangan', '123456789', '4860');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `parking_ticket`
--
ALTER TABLE `parking_ticket`
  ADD PRIMARY KEY (`parking_ticket_id`),
  ADD KEY `pt_idx` (`parking_ticket_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `red_light_ticket`
--
ALTER TABLE `red_light_ticket`
  ADD PRIMARY KEY (`red_light_ticket_id`),
  ADD KEY `rlr_idx` (`red_light_ticket_id`);

--
-- Indexes for table `service_charge`
--
ALTER TABLE `service_charge`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ticket_points`
--
ALTER TABLE `ticket_points`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tickets_filed`
--
ALTER TABLE `tickets_filed`
  ADD PRIMARY KEY (`ticket_id`),
  ADD UNIQUE KEY `ticket_id_UNIQUE` (`ticket_id`);

--
-- Indexes for table `traffic_ticket`
--
ALTER TABLE `traffic_ticket`
  ADD PRIMARY KEY (`traffic_ticket_id`),
  ADD KEY `tt_idx` (`traffic_ticket_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `service_charge`
--
ALTER TABLE `service_charge`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `ticket_points`
--
ALTER TABLE `ticket_points`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `parking_ticket`
--
ALTER TABLE `parking_ticket`
  ADD CONSTRAINT `pt` FOREIGN KEY (`parking_ticket_id`) REFERENCES `tickets_filed` (`ticket_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `red_light_ticket`
--
ALTER TABLE `red_light_ticket`
  ADD CONSTRAINT `rlr` FOREIGN KEY (`red_light_ticket_id`) REFERENCES `tickets_filed` (`ticket_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `traffic_ticket`
--
ALTER TABLE `traffic_ticket`
  ADD CONSTRAINT `tt` FOREIGN KEY (`traffic_ticket_id`) REFERENCES `tickets_filed` (`ticket_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
