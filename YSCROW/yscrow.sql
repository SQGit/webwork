-- phpMyAdmin SQL Dump
-- version 4.6.3
-- https://www.phpmyadmin.net/
--
-- Host: 50.62.209.119:3306
-- Generation Time: Aug 12, 2016 at 02:41 PM
-- Server version: 5.5.43-37.2-log
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yscrow_data`
--
CREATE DATABASE IF NOT EXISTS `yscrow_data` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `yscrow_data`;

-- --------------------------------------------------------

--
-- Table structure for table `movie_tickets`
--

CREATE TABLE `movie_tickets` (
  `id` int(5) NOT NULL,
  `tx_id` varchar(16) NOT NULL,
  `movie_name` varchar(100) NOT NULL,
  `theatre_name` varchar(100) NOT NULL,
  `show_date` varchar(50) NOT NULL,
  `show_time` varchar(50) NOT NULL,
  `other_details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movie_tickets`
--

INSERT INTO `movie_tickets` (`id`, `tx_id`, `movie_name`, `theatre_name`, `show_date`, `show_time`, `other_details`) VALUES
(2, 'tx4108', 'kabali', 'Sathyam Cinemas', '17 August, 2016', '6 : 30 PM', 'kabali movie ticket 5 no.');

-- --------------------------------------------------------

--
-- Table structure for table `reg_user`
--

CREATE TABLE `reg_user` (
  `id` int(5) NOT NULL,
  `user_id` varchar(8) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `mobile` varchar(16) NOT NULL,
  `id_proof` varchar(45) NOT NULL,
  `user_image` varchar(45) NOT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reg_user`
--

INSERT INTO `reg_user` (`id`, `user_id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `id_proof`, `user_image`, `reg_date`, `status`) VALUES
(6, '', 'sivaraj', 's', 'sivarajnkl@ymail.com', 'passs', '9790280707', 'id_proof_73278a4.jpg', '', '2016-08-06 14:21:28', 1),
(13, '', 'gopi', 'partha', 'ajakster@gmail.com', 'welcome123', '8526571169', 'id_proof_1be3bc3.jpg', '', '2016-08-11 14:53:50', 1),
(16, '', 'sivaraj', 's', 'siva@sqindia.net', 'passs', '9790280707', 'id_proof_085fc14.jpg', '', '2016-08-11 15:04:09', 0),
(18, '', 'Hari', 'Vijay', 'illuminati.ilight@gmail.com', '12345', '1234567890', 'id_proof_d1d5923.jpg', '', '2016-08-11 15:10:31', 0),
(19, '', 'Naveen', 'Kumar', 'mailing2naveen@gmail.com', '111111', '9994891704', 'id_proof_7d771e0.jpg', '', '2016-08-11 15:14:31', 0);

-- --------------------------------------------------------

--
-- Table structure for table `transaction_details`
--

CREATE TABLE `transaction_details` (
  `id` int(5) NOT NULL,
  `tx_id` varchar(16) NOT NULL,
  `tr_name` varchar(45) NOT NULL,
  `init_by` varchar(45) NOT NULL,
  `buyer` varchar(200) NOT NULL,
  `seller` varchar(200) NOT NULL,
  `tr_category` varchar(200) NOT NULL,
  `amt_value` float NOT NULL,
  `yscrow_fee_by` varchar(16) NOT NULL,
  `yscrow_fees` float NOT NULL,
  `buyer_pay` float NOT NULL,
  `seller_receive` float NOT NULL,
  `pay_terms` text,
  `pay_terms_custom` text,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transaction_details`
--

INSERT INTO `transaction_details` (`id`, `tx_id`, `tr_name`, `init_by`, `buyer`, `seller`, `tr_category`, `amt_value`, `yscrow_fee_by`, `yscrow_fees`, `buyer_pay`, `seller_receive`, `pay_terms`, `pay_terms_custom`, `created`, `updated`, `status`) VALUES
(2, 'tx4108', 'kabali', 'sivarajnkl@ymail.com', 'sivarajnkl@ymail.com', 'mailing2naveen@gmail.com', 'movie_tickets', 1500, 'both', 120, 1560, 1440, 'Release Payment With in One Hour', NULL, '2016-08-06 14:38:30', '0000-00-00 00:00:00', 'goods received');

-- --------------------------------------------------------

--
-- Table structure for table `tx_history`
--

CREATE TABLE `tx_history` (
  `id` int(5) NOT NULL,
  `tx_id` varchar(16) NOT NULL,
  `if_requested` text,
  `updated_by` varchar(45) NOT NULL,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tx_history`
--

INSERT INTO `tx_history` (`id`, `tx_id`, `if_requested`, `updated_by`, `updated_date`, `status`) VALUES
(1, 'tx3087', NULL, 'sivarajnkl@ymail.com', '2016-08-06 14:27:59', 'invited'),
(2, 'tx4108', NULL, 'sivarajnkl@ymail.com', '2016-08-06 14:38:30', 'invited'),
(3, 'tx4108', 'evening show only avail..', 'mailing2naveen@gmail.com', '2016-08-06 14:44:23', 'requested'),
(4, 'tx4108', NULL, 'sivarajnkl@ymail.com', '2016-08-06 14:54:30', 'invitation_resent'),
(5, 'tx4108', NULL, 'mailing2naveen@gmail.com', '2016-08-06 14:58:59', 'accepted'),
(6, 'tx4108', NULL, 'sivarajnkl@ymail.com', '2016-08-06 15:05:39', 'Payment Success'),
(7, 'tx4108', NULL, 'mailing2naveen@gmail.com', '2016-08-06 15:09:52', 'dispatched'),
(8, 'tx4108', NULL, 'sivarajnkl@ymail.com', '2016-08-06 15:15:27', 'goods received');

-- --------------------------------------------------------

--
-- Table structure for table `tx_images`
--

CREATE TABLE `tx_images` (
  `id` int(5) NOT NULL,
  `tx_id` varchar(16) NOT NULL,
  `tx_image` varchar(100) NOT NULL,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tx_images`
--

INSERT INTO `tx_images` (`id`, `tx_id`, `tx_image`, `updated_date`) VALUES
(1, 'tx3087', 'tr_docca4bd34.jpg', '2016-08-06 14:27:59'),
(2, 'tx4108', 'tr_docd9e74f4.jpg', '2016-08-06 14:38:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie_tickets`
--
ALTER TABLE `movie_tickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tx_id` (`tx_id`);

--
-- Indexes for table `reg_user`
--
ALTER TABLE `reg_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `transaction_details`
--
ALTER TABLE `transaction_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tx_id` (`tx_id`);

--
-- Indexes for table `tx_history`
--
ALTER TABLE `tx_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tx_id` (`tx_id`);

--
-- Indexes for table `tx_images`
--
ALTER TABLE `tx_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tx_id` (`tx_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movie_tickets`
--
ALTER TABLE `movie_tickets`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `reg_user`
--
ALTER TABLE `reg_user`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `transaction_details`
--
ALTER TABLE `transaction_details`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tx_history`
--
ALTER TABLE `tx_history`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `tx_images`
--
ALTER TABLE `tx_images`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
