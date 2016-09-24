-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 50.62.209.119:3306
-- Generation Time: Sep 24, 2016 at 11:31 AM
-- Server version: 5.5.43-37.2-log
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ifund`
--
CREATE DATABASE IF NOT EXISTS `ifund` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `ifund`;

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `about_id` int(11) NOT NULL,
  `about_bg_image` varchar(45) DEFAULT NULL,
  `about_main_title` varchar(45) DEFAULT NULL,
  `about_sub_title` varchar(45) DEFAULT NULL,
  `about_section` varchar(45) DEFAULT NULL,
  `about_section_desc` text,
  `about_section1` varchar(45) DEFAULT NULL,
  `about_section_desc1` text,
  `about_section_image` varchar(45) DEFAULT NULL,
  `about_section_image1` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`about_id`, `about_bg_image`, `about_main_title`, `about_sub_title`, `about_section`, `about_section_desc`, `about_section1`, `about_section_desc1`, `about_section_image`, `about_section_image1`) VALUES
(1, 'about_us.jpg', 'About Our Company', 'Profile', 'ABOUT US IFUNDNETWORK', '<span>The ifundnetwork is a global invite only private startup funding platform, based in Houston Texas, with offices in Lagos Nigeria and Chennai India. Since 2012 the open crowd funding industry is growing steadily with over $36B+ startups projected to be funded online by 2016. The ifundnetwork is relatively a new comer in the industry. We identified a gap to be filled in the industry, and we are pioneering a new form of entrepreneurship funding platform. We don\'t just fund startups. We partner with them to make sure they get it right from the very beginning.</span>', 'MISSION STATEMENT', 'Our focus is on getting the process right from the very beginning for every startups and serious minded entrepreneurs giving then full access to the right investors and full access to the right connections they need. We carefully select and interview our private investors and match them to the right startup of their interest within the ifundnetwork platform.', 'about_1.jpg', 'about_2.png');

-- --------------------------------------------------------

--
-- Table structure for table `competitors`
--

CREATE TABLE `competitors` (
  `competitor_id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `competitor_name` varchar(200) DEFAULT NULL,
  `competitor_profession` varchar(100) DEFAULT NULL,
  `competitor_logo` varchar(45) DEFAULT NULL,
  `competitor_desc` text,
  `competitor_status` int(2) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `competitors`
--

INSERT INTO `competitors` (`competitor_id`, `project_id`, `competitor_name`, `competitor_profession`, `competitor_logo`, `competitor_desc`, `competitor_status`) VALUES
(1, 1, 'linkedin', 'BUSINESS NETWORKING SPACE', 'linkedin.png', 'Only share your Professional Profile on Place for Artisan\nor for direct sales ', 1),
(2, 1, 'google', 'ADVERTISING VIA DIGITAL BUSINESS CARD', 'google.jpeg', 'Need a website to be visible on google\nOn ifindcard you only need your Business card', 1),
(3, 1, 'eventbrite', 'CREATING & MANAGING EVENTS ', 'eventbrite.png', 'You can create your own event\nlisting and recieve feedback directly\non your event page ', 1),
(4, 1, NULL, 'USE  OF !CLAMTAG  FOR ADS', 'block.jpeg', 'No Competition Yet', 1),
(5, 1, NULL, 'CREATING MULTIPLE  BUSINESS  CARDS', 'block.jpeg', 'No Competition Yet', 1),
(6, 1, 'thumbtack', 'IHIRE (IFINDSERVICES', 'thumbtack.png', NULL, 1),
(7, 1, NULL, '!CLAMTAG ON NAME TAGS', 'block.jpeg', 'No Competition Yet', 1),
(8, 1, NULL, 'EMPLOYEE  ADS  CAMPAIGN  PARTNERSHIP', 'block.jpeg', 'No Competition Yet', 1),
(9, 2, '1N5', 'The  Closest Competition to  Eazytie', '1n5.jpg', 'A muilti color tie  permantly attached to  each other', 1);

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `contact_id` int(11) NOT NULL,
  `contact_address` varchar(200) DEFAULT NULL,
  `contact_phone` varchar(45) DEFAULT NULL,
  `contact_mail` varchar(200) DEFAULT NULL,
  `contact_bg_image` varchar(45) DEFAULT NULL,
  `contact_main_title` varchar(45) DEFAULT NULL,
  `contact_sub_title` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`contact_id`, `contact_address`, `contact_phone`, `contact_mail`, `contact_bg_image`, `contact_main_title`, `contact_sub_title`) VALUES
(1, '5800 Ranchester Dr \nSuite 168 Houston Texas 77036', '832-356-3971', 'info@ifundnetwork.com\n<br/>           info@ifindcard.com \n', 'contact_us.jpg', 'Contact Us', 'Drop a Message');

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `country_id` int(12) NOT NULL,
  `country` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`country_id`, `country`) VALUES
(4, 'Africa'),
(2, 'Nigeria'),
(10, 'North America'),
(11, 'UK-Europe'),
(9, 'US');

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `document_id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `document_group_name` varchar(200) DEFAULT NULL,
  `document_name` varchar(200) DEFAULT NULL,
  `document_path` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`document_id`, `project_id`, `document_group_name`, `document_name`, `document_path`) VALUES
(1, 1, 'Business Plan', 'Document Name', NULL),
(2, 1, 'Company Registration Documents', 'Document Name', NULL),
(3, 1, 'Investment Term Sheet', 'Document Name', NULL),
(4, 1, 'Patent Application', 'Document Name', NULL),
(5, 1, 'Due Dilligence Documents', 'Document Name', NULL),
(7, 2, 'Business Plan', 'Document Name', NULL),
(8, 2, 'Company Registration Documents', 'Document Name', NULL),
(9, 2, 'Investment Term Sheet', 'Document Name', NULL),
(10, 2, 'Patent Application', 'Document Name', NULL),
(11, 2, 'Due Dilligence Documents', 'Document Name', NULL),
(12, 3, 'Business Plan', 'Document Name', NULL),
(13, 3, 'Company Registration Documents', 'Document Name', NULL),
(14, 3, 'Investment Term Sheet', 'Document Name', NULL),
(15, 3, 'Patent Application', 'Document Name', NULL),
(16, 3, 'Due Dilligence Documents', 'Document Name', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `double_port`
--

CREATE TABLE `double_port` (
  `ID` int(3) NOT NULL,
  `min_amt` float NOT NULL,
  `max_amt` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `double_port`
--

INSERT INTO `double_port` (`ID`, `min_amt`, `max_amt`) VALUES
(1, 10000, 15000);

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `faq_id` int(11) NOT NULL,
  `faq_question` varchar(200) DEFAULT NULL,
  `faq_ans` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`faq_id`, `faq_question`, `faq_ans`) VALUES
(1, 'Question 1', '<span>The ifundnetwork Private Investors Platform is strictly an invite only based funding network designed to fund all potential startup projects initiated by members of the network or an affiliated 3rd party startup partners. Although we intend to have funding network open to the public in the future. Until then all funding are by invitation only.<br>The ifundnetwork private investment opportunities are only open to members who have completed the network private investor questionnaire.<br>Offerings and Funding Documents<br>Once your ifundnetwork account has been activated you will have instant access to our investment project currently been funded and your access code expires in 7 business days beginning from your first login date.<br>Action Required on Your part within the 7 days</span> <ol> <li>Review all document related to the current funded project </li> <li>Speak to an ifundnetwork  representative </li> <li>Select your investment amount for the currently funded project/Categories</li> <li>Pay your investment funds to an assigned 3rd party collector.</li> <li>Receive a convertible note and other related documents </li> <li>Subscribe to receive an update on the milestones attained with regards to your investment.</li> </ol> <span>We are offering a 10% for $500, 000 worth of shares for our company to privlllaged friends and family members this will cover the cost of development, Server hosting, Product Advertisment  and Business data collection.<br>Our aim is to have 500,000 to a Million subscribers a year from our intial launch date. giving us an enermous value before we begin to seek for any venture captialist investor and other Angel investors by so doing the value of any post investment portfolio will greatly be in our favor and on our terms.</span>'),
(2, 'Question 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'),
(3, 'Question 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'),
(4, 'Question 4', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'),
(5, 'Question 5', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.');

-- --------------------------------------------------------

--
-- Table structure for table `faq_page`
--

CREATE TABLE `faq_page` (
  `id` int(3) NOT NULL,
  `faq_bg_image` varchar(50) NOT NULL,
  `faq_main_title` varchar(100) NOT NULL,
  `faq_sub_title` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `faq_page`
--

INSERT INTO `faq_page` (`id`, `faq_bg_image`, `faq_main_title`, `faq_sub_title`) VALUES
(1, 'faq.jpg', 'Frequently Asked Questions', 'Feedback');

-- --------------------------------------------------------

--
-- Table structure for table `full_port`
--

CREATE TABLE `full_port` (
  `ID` int(3) NOT NULL,
  `min_amt` float NOT NULL,
  `max_amt` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `full_port`
--

INSERT INTO `full_port` (`ID`, `min_amt`, `max_amt`) VALUES
(1, 16000, 50000);

-- --------------------------------------------------------

--
-- Table structure for table `funding`
--

CREATE TABLE `funding` (
  `fund_id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `funding_name` varchar(200) DEFAULT NULL,
  `funding_document_path` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `funding`
--

INSERT INTO `funding` (`fund_id`, `project_id`, `funding_name`, `funding_document_path`) VALUES
(1, 1, 'Angel/Syndicate Investors', NULL),
(2, 1, 'Fund Pool', NULL),
(3, 1, 'Investment Term Sheet', NULL),
(4, 1, 'Investement Privacy Policy', NULL),
(5, 1, 'International Investors', NULL),
(6, 2, 'Angel/Syndicate Investors', NULL),
(7, 2, 'Fund Pool', NULL),
(8, 2, 'Investment Term Sheet', NULL),
(9, 2, 'Investement Privacy Policy', NULL),
(10, 2, 'International Investors', NULL),
(11, 3, 'Angel/Syndicate Investors', NULL),
(12, 3, 'Fund Pool', NULL),
(13, 3, 'Investment Term Sheet', NULL),
(14, 3, 'Investement Privacy Policy', NULL),
(15, 3, 'International Investors', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `img_id` int(6) NOT NULL,
  `project_id` int(6) NOT NULL,
  `img_path` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`img_id`, `project_id`, `img_path`) VALUES
(3, 1, 'ifind/1.png'),
(4, 1, 'ifind/2.png'),
(5, 1, 'ifind/3.png'),
(6, 1, 'ifind/4.png'),
(7, 1, 'ifind/5.png'),
(8, 1, 'ifind/6.png'),
(9, 1, 'ifind/7.png'),
(10, 1, 'ifind/8.png'),
(11, 1, 'ifind/9.png'),
(12, 1, 'ifind/10.png'),
(13, 1, 'ifind/11.png'),
(14, 2, 'eazytie/1.png'),
(15, 2, 'eazytie/2.png'),
(16, 2, 'eazytie/3.png'),
(17, 2, 'eazytie/4.png'),
(18, 2, 'eazytie/5.png'),
(19, 2, 'eazytie/6.png'),
(20, 3, 'oonbux/1.png'),
(21, 3, 'oonbux/2.png'),
(22, 3, 'oonbux/3.png'),
(23, 3, 'oonbux/4.png'),
(24, 3, 'oonbux/5.png'),
(25, 3, 'oonbux/6.png'),
(26, 3, 'oonbux/7.png'),
(27, 3, 'oonbux/8.png'),
(28, 3, 'oonbux/9.png'),
(29, 3, 'oonbux/10.png');

-- --------------------------------------------------------

--
-- Table structure for table `investment_criteria`
--

CREATE TABLE `investment_criteria` (
  `ID` int(3) NOT NULL,
  `points` text NOT NULL,
  `note` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `investment_criteria`
--

INSERT INTO `investment_criteria` (`ID`, `points`, `note`) VALUES
(1, '<li>You have 72 hours after your first login & Registration before your {PIC} Expires; you have to make a financial commitment to keep your place in the platform.</li>\n<li>Single Portfolio, or Bundle2 or Bundle 3</li>\n<li>Pay you commitment fund fees of 10% of your total investment amount. (Assuming you want to Invest  $5000; your commitment place holder fund will Be $500)</li>\n<li>You have 14 days to complete the payment of the total value of your investment.</li>', '<li>Your 10% will be returned to you in full if you fail to make a full payment for the investment option you selected after the expiration of your 14days. Excluding the Administrative costs</li>\n<li>For the Bundles your investment fund will be spread in equal percentage across the board.</li>');

-- --------------------------------------------------------

--
-- Table structure for table `partner_page`
--

CREATE TABLE `partner_page` (
  `id` int(3) NOT NULL,
  `partner_main_title` varchar(100) NOT NULL,
  `partner_sub_title` varchar(100) NOT NULL,
  `partner_bg_image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `partner_page`
--

INSERT INTO `partner_page` (`id`, `partner_main_title`, `partner_sub_title`, `partner_bg_image`) VALUES
(1, 'Our Partners', '', 'partners.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `partners_id` int(11) NOT NULL,
  `partner_name` varchar(45) DEFAULT NULL,
  `partner_logo` varchar(45) DEFAULT NULL,
  `partner_country` varchar(45) DEFAULT NULL,
  `partner_profession` varchar(45) DEFAULT NULL,
  `partner_desc` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`partners_id`, `partner_name`, `partner_logo`, `partner_country`, `partner_profession`, `partner_desc`) VALUES
(1, 'oonsoft', 'oonsoft.jpg', 'US', 'Business Development', 'Oonsoft Is a technology consulting and innovation company, focused on business process improvement and business technology adaptation. Oonsoft Strategy combines best innovations that technology can provide with dynamic business model in solving business problems for startup, SME\'s, and State information services and portals. Oonsoft has its operating offices in Houston Texas, and in Lagos Nigeria.'),
(2, 'samuel', 'samuel.jpg', 'North Americ', 'Financial Consultant', 'As a qualified Houston CPA firm and business advisor, you can be confident, knowing your finances investment are in good hands with Samuel Amoo & Associates. Accounting Reports SA & A does the  Accounting & Consulting does the bookkeeping for each project listed on ifundnetwork platform  by providing monthly/quarterly reports. All data is uploaded to the company\'s profile and is visible to every registered user.'),
(3, 'oonsoft', 'oonsoft.jpg', 'Africa', 'Financial Consultant', 'As a qualified Houston CPA firm and business advisor, you can be confident, knowing your finances investment are in good hands with Samuel Amoo & Associates.Accounting Reports SA & A does the  Accounting & Consulting does the bookkeeping for each project listed on ifundnetwork platform  by providing monthly/quarterly reports. All data is uploaded to the company\'s profile and is visible to every registered user.'),
(4, 'mobisoft', 'mobisoft.jpg', 'US', 'Technical Partners', 'Mobisoft works with businesses to enable them to gain flexibility, increase productivity, and reduce costs with end-to-end mobility services. Our enterprise mobility services cover all your mobility needs from strategic planning to device management to end-user application.ok');

-- --------------------------------------------------------

--
-- Table structure for table `pic_table`
--

CREATE TABLE `pic_table` (
  `req_id` int(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `pic` varchar(45) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `activation_date` datetime NOT NULL,
  `expiry_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pic_table`
--

INSERT INTO `pic_table` (`req_id`, `name`, `email`, `phone`, `country`, `pic`, `is_active`, `creation_date`, `activation_date`, `expiry_date`) VALUES
(57, 'siva raj', 'sivaa@sqindia.net', '9790280707', 'us', '5746c8a285d06', 1, '2016-05-26 14:43:30', '2016-05-26 15:27:54', '2016-09-30'),
(58, '', '', '', '', '57564adb6e8d6', 1, '2016-06-07 11:17:31', '2016-06-06 21:17:31', '2016-06-08'),
(59, '', '', '', '', '57564adb6e8e7', 1, '2016-06-07 11:17:31', '2016-06-06 21:17:31', '2016-06-08'),
(60, '', '', '', '', '57564adb6e8f0', 1, '2016-06-07 11:17:31', '2016-06-06 21:17:31', '2016-06-08'),
(61, '', '', '', '', '576bbe7d1c525', 1, '2016-06-23 17:48:29', '2016-06-23 03:48:29', '2016-07-03'),
(62, '', '', '', '', '576bbe7d1c52f', 1, '2016-06-23 17:48:29', '2016-06-23 03:48:29', '2016-07-03'),
(63, '', '', '', '', '576bbea6b3acc', 1, '2016-06-23 17:49:10', '2016-06-23 03:49:10', '2016-06-25'),
(64, '', '', '', '', '576bbea6b3ad9', 1, '2016-06-23 17:49:10', '2016-06-23 03:49:10', '2016-06-25'),
(65, '', '', '', '', '576bf2ea03541', 1, '2016-06-23 21:32:10', '2016-06-23 07:32:10', '2016-07-13'),
(66, '', '', '', '', '576bf2ea0354e', 1, '2016-06-23 21:32:10', '2016-06-23 07:32:10', '2016-07-13'),
(67, '', '', '', '', '576bf2ea03554', 1, '2016-06-23 21:32:10', '2016-06-23 07:32:10', '2016-07-13'),
(68, '', '', '', '', '576bf2ea0355b', 1, '2016-06-23 21:32:10', '2016-06-23 07:32:10', '2016-07-13'),
(69, '', '', '', '', '576bf2ea03561', 1, '2016-06-23 21:32:10', '2016-06-23 07:32:10', '2016-07-13'),
(70, '', 'odialeonard@gmail.com', '', '', '576bf3052004e', 1, '2016-06-23 21:32:37', '2016-06-23 07:32:37', '2016-07-13'),
(71, '', 'eadagbo@ifindcard.com', '', '', '576bf3052005c', 1, '2016-06-23 21:32:37', '2016-06-23 07:32:37', '2016-07-13'),
(72, '', '', '', '', '576bf30520065', 1, '2016-06-23 21:32:37', '2016-06-23 07:32:37', '2016-07-13'),
(73, '', '', '', '', '576bf3052006c', 1, '2016-06-23 21:32:37', '2016-06-23 07:32:37', '2016-07-13'),
(74, '', '', '', '', '576bf30520074', 1, '2016-06-23 21:32:37', '2016-06-23 07:32:37', '2016-07-13'),
(75, '', 'sivaraj.s7@gmail.com', '', '', '576cbd5aa8f78', 1, '2016-06-24 11:55:54', '2016-06-23 21:55:54', '2016-06-26'),
(76, '', '', '', '', '576cbd5aa8f87', 1, '2016-06-24 11:55:54', '2016-06-23 21:55:54', '2016-06-26'),
(77, '', 'pgnath@gmail.com', '', '', '576ccb6b64b64', 1, '2016-06-24 12:55:55', '2016-06-23 22:55:55', '2016-07-13'),
(78, '', '', '', '', '576ccb6b64b7e', 1, '2016-06-24 12:55:55', '2016-06-23 22:55:55', '2016-07-13'),
(79, '', '', '', '', '576ccb6b64b87', 1, '2016-06-24 12:55:55', '2016-06-23 22:55:55', '2016-07-13'),
(80, '', '', '', '', '576ccb6b64b8e', 1, '2016-06-24 12:55:55', '2016-06-23 22:55:55', '2016-07-13'),
(81, '', '', '', '', '576ccb6b64b96', 1, '2016-06-24 12:55:55', '2016-06-23 22:55:55', '2016-07-13'),
(82, '', '', '', '', '57d457cd2f75f', 1, '2016-09-10 18:58:21', '2016-09-10 11:58:21', '2016-09-13'),
(83, '', 'emdaniells@gmail.com', '', '', '57d4580133838', 1, '2016-09-10 18:59:13', '2016-09-10 11:59:13', '2016-09-13'),
(84, '', '', '', '', '57d4580133846', 1, '2016-09-10 18:59:13', '2016-09-10 11:59:13', '2016-09-13'),
(85, '', 'edaniells@yahoo.com', '', '', '57d517394062e', 1, '2016-09-11 08:35:05', '2016-09-11 01:35:05', '2016-09-14'),
(86, '', 'siva@sqindia.net', '', '', '57d517394063d', 1, '2016-09-11 08:35:05', '2016-09-11 01:35:05', '2016-09-14'),
(87, '', 'siva@sqindia.net', '', '', '57d52026a8a4d', 1, '2016-09-11 09:13:10', '2016-09-11 02:13:10', '2016-09-14'),
(88, '', 'siva@sqindia.net', '', '', '57d52026a8a64', 1, '2016-09-11 09:13:10', '2016-09-11 02:13:10', '2016-09-14'),
(89, '', '', '', '', '57d56db766177', 1, '2016-09-11 14:44:07', '2016-09-11 07:44:07', '2016-10-01'),
(90, '', 'ajakster@gmail.com', '', '', '57d56dda75874', 1, '2016-09-11 14:44:42', '2016-09-11 07:44:42', '2016-09-23'),
(91, '', 'siva@sqindia.net', '', '', '57da33198663c', 1, '2016-09-15 05:35:21', '2016-09-14 22:35:21', '2016-09-15'),
(92, '', '', '', '', '57e5a8df0953d', 1, '2016-09-23 22:12:47', '2016-09-23 15:12:47', '2016-09-26'),
(93, '', '', '', '', '57e5a8df0954c', 1, '2016-09-23 22:12:47', '2016-09-23 15:12:47', '2016-09-26'),
(94, '', '', '', '', '57e5a909db3ef', 1, '2016-09-23 22:13:29', '2016-09-23 15:13:29', '2016-09-26'),
(95, '', '', '', '', '57e5a909db3fd', 1, '2016-09-23 22:13:29', '2016-09-23 15:13:29', '2016-09-26'),
(96, '', 'emdaniells@gmail.com', '', '', '57e5a93059c0e', 1, '2016-09-23 22:14:08', '2016-09-23 15:14:08', '2016-09-24');

-- --------------------------------------------------------

--
-- Table structure for table `project_list`
--

CREATE TABLE `project_list` (
  `project_id` int(11) NOT NULL,
  `project_name` varchar(45) NOT NULL,
  `project_cover` varchar(45) DEFAULT NULL,
  `project_logo` varchar(45) NOT NULL,
  `project_category` varchar(200) DEFAULT NULL,
  `project_fund_goal` varchar(11) DEFAULT NULL,
  `project_amt_invested` varchar(12) DEFAULT NULL,
  `project_fund_pool` int(11) DEFAULT NULL,
  `project_angels` int(11) DEFAULT NULL,
  `project_fund_period_from` date DEFAULT NULL,
  `project_fund_period_to` date DEFAULT NULL,
  `project_fund_days_left` varchar(6) DEFAULT NULL,
  `project_video` varchar(100) DEFAULT NULL,
  `project_desc_short` text,
  `project_vision` text,
  `project_problem` text,
  `project_solution_video` varchar(45) DEFAULT NULL,
  `project_solution_text` text,
  `project_other_details` text,
  `project_advantage` text,
  `investment_fund_pool` text NOT NULL,
  `doc_receive` text NOT NULL,
  `project_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` enum('active','draft','disabled','') NOT NULL DEFAULT 'draft',
  `funding_required` enum('0','1') NOT NULL DEFAULT '0',
  `location_city` varchar(200) NOT NULL,
  `location_state` varchar(200) NOT NULL,
  `location_country` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `project_list`
--

INSERT INTO `project_list` (`project_id`, `project_name`, `project_cover`, `project_logo`, `project_category`, `project_fund_goal`, `project_amt_invested`, `project_fund_pool`, `project_angels`, `project_fund_period_from`, `project_fund_period_to`, `project_fund_days_left`, `project_video`, `project_desc_short`, `project_vision`, `project_problem`, `project_solution_video`, `project_solution_text`, `project_other_details`, `project_advantage`, `investment_fund_pool`, `doc_receive`, `project_added`, `status`, `funding_required`, `location_city`, `location_state`, `location_country`) VALUES
(1, 'ifindcard', 'cover_ifindcard.png', 'ifindcard.png', 'Business Networking Platform', '500,000', '100,000 ', 4, 0, '2016-09-12', '2016-10-12', '', 'https://www.youtube.com/embed/hOnuLcmWC_A?rel=0&amp;showinfo=0', 'Ifindcard is a Mobile and web-based business and social networking platform where users, can sell products and services directly from personalised digital business card, without the need of a website. Every shared business card becomes an opportunity to advertise a product, a service and a lead. Every one on the network&nbsp;can personalize its own Business-Network work and lots more.<br/><br/><br/>', 'Ifindcard is a mobile and web based social and business application platform. that allows its users the opportunity to engage in social and business networking. The application provides a unique platform in which all its users have the ability to access all their business connections, services, schedules, and much more. Ifindcard is quite unique in the platform provided as users will be able to engage in ecommerce, socialize, find local services, schedule appointments, find events, store coupons, and much more all from scanning a business card. More importantly, Ifindcard offers a distinctive opportunity for users to earn a significant residual income simply by introducing the application to businesses they are already patronizing.', '<p>With the invention of the smartphone practically every aspect of life has been affected by it. The smartphone created instant solution to daily problems in life by making it possible for anyone anywhere in the world to get the same result based on these three principle.</p>\n<ul>\n<li>The solution must be dynamic enough to meet the need.</li>\n<li>The solution must be easy to use and adaptable.</li>\n<li>The solution must cut across international boundaries.</li>\n</ul>\n<p>companies like UBER, Snapchat, Facebook, Pinterest, Twitter, and Instagram all created a multi-billion-dollar technology innovative industries. They are a proof that all human shares the same need and anyone with the right solution can take advantage of it The distinguishing factor that made these companies great was that they all picked up a single area of need and they offered a total solution to that that area of need and the entire world is becoming addicted to them simply because they narrowed down to something the society needs and they placed it in the hands of everyone at the click of a "Button" and today the rest is history</p>\n<p>Ifindcard is the most innovative solution ever created to the problem facing business all over the world who want to have their presence felt in the mobile Advertisement space in the smartphone world.</p>\n<p>We Created a new way of initiating, processing and completion of any business transaction by simple using a "Digital business Card", and a "business phone number". Irrespective of what kind of business our client are engaged in. all they need in order to be visible to their clients and customers is their Business Phone Number and a special easy to capture unique code.</p>\n<p>With our one of its kind business platform SME\'s who can\'t afford a website can finally have the opportunity of having an online presence just with their phone number alone. Customers simple need their already existing business phone number to view all the product & services that they offer and can directly place an order from their phone via our platform.</p>', '', '<p>End User Engagement for ifindcard customers</p>\n<br/>\n<p>Chatting Feature</p>\n<p>Appointment Manager</p>\n<p>Reviews & Ratings</p>\n<p>Share, Store and geptag business cards</p>\n<p>Marketing Strategy</p>\n<br/>\n<p>Visiblity</p>\n<p>Social Networking Model</p>\n<p>Event management</p>\n<p>3rd Party Busines Card Template Design</p>\n<p>Merchants/ Business Professional Engagments</p>\n<br/>\n<p>Create Business Cards</p>\n<p>Mobile Digital Version</p>\n<p>Physical Version</p>\n<p>One Platform Multiple Business Card</p>\n<br/>\n<p>Create A facebook like business Ad Page</p>\n<p>Link One or More Business Card To Your Business Ad Page Increase Sales/Traffic</p>\n<p>Link Business Associate/Employee business card to Business Ad page</p>\n<p>Aggregate visiblity of related cards to one another</p>\n<p>ifindcard Business Manager</p>\n<br/>\n<p>ifindcard 2.0</p>\n<p>Ads space Sales</p>\n<p>Focus On Corporate Accounts</p>\n<p>3rd party Services</p>', '', '<p>Online Mobile Business Visibility Without A Website</p>\n<p>Strong Business Marketing & Sales Tool In 3rd World Countries Where its costly to Own & Maintain A Website</p>\n<p>Use of Business Card To Advertise Business Services & Product On Mobile Devices</p>\n<p>Ifindcard Business Manager</p>\n<p>Use Of Clamtag for Business Networking & Advertisement</p>\n<p>Aggregation of Related Business Card</p>\n<p>Create & Host Multiple Business Cards In One Platform</p>\n<p>Share Business Card Via Receivers Phone # or Via Clamtag ID</p>\n<p>Hire Professional Directly from App</p>\n<p>Post Professional Resume On User Page</p>\n<p>B2C, C2C Chatting, Appointment Scheduling, Event Manager</p>', '<p>We are offering a 10% for $500, 000 worth of shares for our company to privlllaged friends and family members this is cover the cost of development, Server hosting, Product Advertisment  and Business data collection.<br/>Our aim is to have 500,000 to a Million subscribers a year from our intial launch date. giving us an enermous value before we begin to seek for any venture captialist investor and other Angel investors by so doing the value of any post investment portfolio will greatly be in our favor and on our terms.</p>', '<ol> 	<li>Convertiable Note Certificate</li> 	<li>Regular Email Update </li> 	<li>Quarterly Financial Report From Certified Financial Consulting Partner </li> 	<li>An Investment Term Sheet </li> 	</ol>', '2016-04-26 15:12:14', 'active', '1', 'Houston Texas', 'Lagos Nigeria', 'Chennai India'),
(2, 'eazy tie', 'cover_eazytie.png', 'eazytie.png', 'Men\'s Fashion Accessories', '120,000', '75,000', 2, 2, '2016-06-01', '2016-06-30', '', 'https://www.youtube.com/embed/7UOcK5perig?rel=0&amp;showinfo=0', 'Knotting and making a perfect necktie has always been a challenge. The tie is either too short or too long, to alot of men this is a huge problem, Eazytie is a 3 step process that has finally solved this problem. Select any tie of choice, select a pre-made knot of your choice mix and match both and you have a perfect tie all the time.<br/><br/><br/><br/><br/>', 'Eazytie sovles of the problem of knotting a new ties, with eazytie the knot is already pre-made  all one has to do is select the best knot and match it any tie of you choice and you have a fresh look everytime.', '', '', '<h4>Co-oprate Organisation</h4>\n<p>Can now for the first time inscribe their company logo directly on the neck tie knot giving their employee a fresh smart look</p>\n<br/>\n<h4>Wedding Groom & Grooms Men</h4>\n<p>Can mix and match their ties to match the colors of the day</p>\n<br/>\n<h4>Business Men</h4>\n<p>Can choose from varity of knots and ties to match the smart look they want to project for an important meeting</p>', '', '', '<p>We are offering a 10% share for $120,000 for our company to privileged friends and family members this is cover the cost of the final prototyping modeling fabric material procurement, product assembly and overhead and direct advertisement cost and Further  research and development</p>', '<ol> 	<li>Convertiable Note Certificate</li> 	<li>Regular Email Update </li> 	<li>Quarterly Financial Report From Certified Financial Consulting Partner </li> 	<li>An Investment Term Sheet </li> 	</ol>', '2016-04-26 23:46:07', 'active', '1', 'Houston Texas', 'Lagos Nigeria', 'Chennai India'),
(3, 'oonbux', 'cover_oonbux.png', 'oonbux.png', 'Business Logistics Platform', '100,000', '80,000', 3, 1, '2016-04-04', '2016-04-30', '', 'https://www.youtube.com/embed/_m47O7m6PiM?rel=0&amp;showinfo=0', 'Is an on demand logistics platform that picks up your packages and ship them internationally. Users are assigned a simple shipping ID and a location based address, which can be used either to ship or receive packages from any where in the world. It allows travelers the choice to use assigned Oonbux ID to pre-ship travelling luggage\'s ahead of time and also allows an opportunity for international on-line shoppers to use same means to receive items from anywhere in the world.', 'The demand for an easy step logistics platform that picks up your packages and ships it internationally. Here a user is simply assigned a shipping ID and a location based address; this enables them to both ship and receive their packages from anywhere in the world. Travelers can use their oonbux ID to pre-ship their travelling luggage\'s ahead of time to avoid airport delays and international online shoppers can use same to receive their items from anywhere in the world. Anyone, anywhere, in the world can create a virtual shipping ID and use it to receive packages from friends and families abroad.', '', '', NULL, '', '', '<p>We are offering a 10% for $100, 000 worth of shares for our company to privileged friends and family members this is cover the cost of development, Server hosting, Product Advertisement and Business data collection.<br/>Our aim is to have a minimum of 200,000 Subscribers in Africa, India and the United Kingdom Using the App for all their International online Purchases and international luggage handling services by the end of 2017 from our initial launch date; Giving us an enormous value before we begin to seek for any venture capitalist investor and other Angel investors by so doing the value of any post investment portfolio will greatly be in our favor and on our terms.</p>', '<ol> 	<li>Convertiable Note Certificate</li> 	<li>Regular Email Update </li> 	<li>Quarterly Financial Report From Certified Financial Consulting Partner </li> 	<li>An Investment Term Sheet </li> 	</ol>', '2016-04-26 23:46:07', 'active', '1', 'Houston Texas', 'London U.K ', 'Lagos Nigeria');

-- --------------------------------------------------------

--
-- Table structure for table `reg_user`
--

CREATE TABLE `reg_user` (
  `pic` varchar(16) NOT NULL,
  `name` varchar(45) NOT NULL,
  `user_id` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `baddress` varchar(200) NOT NULL,
  `saddress` varchar(200) NOT NULL,
  `bcity` varchar(45) NOT NULL,
  `scity` varchar(45) NOT NULL,
  `bzipcode` varchar(45) NOT NULL,
  `szipcode` varchar(6) NOT NULL,
  `country` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `access_level` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reg_user`
--

INSERT INTO `reg_user` (`pic`, `name`, `user_id`, `password`, `email`, `baddress`, `saddress`, `bcity`, `scity`, `bzipcode`, `szipcode`, `country`, `phone`, `access_level`) VALUES
('9632658947', 'admin', 'admin', 'passs', 'admin@ifund.com', '', '', '', '', '', '', 'india', '', 1),
('57e5a93059c0e', 'Emeka Daniells', 'Emmy18', 'ezinne', 'emdaniells@gmail.com', '5800 Ranchester Dr,Houston', '5800 Ranchester Dr,Houston', 'Houston', 'scity', '77036', '77036', 'North America', '7134827574', 0),
('5746c8a285d06', 'siva raj', 'sivaraj', 'password', 'siva@sqindia.net', 'address1,address2', 'address1,address2', 'city', 'scity', '123456', '123456', 'US', '9790280707', 0),
('576cbd5aa8f78', 'sivaraj s', 'sivaraja', 'password', 'sivaraj.s7@gmail.com', 'address1,address2', 'address1,address2', 'city1', 'scity', '601301', '601301', 'US', '9790280707', 0);

-- --------------------------------------------------------

--
-- Table structure for table `single_port`
--

CREATE TABLE `single_port` (
  `ID` int(3) NOT NULL,
  `amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `single_port`
--

INSERT INTO `single_port` (`ID`, `amount`) VALUES
(1, 5000),
(2, 6000),
(3, 7000),
(4, 8000),
(5, 9000);

-- --------------------------------------------------------

--
-- Table structure for table `startup_tab`
--

CREATE TABLE `startup_tab` (
  `id` int(6) NOT NULL,
  `project_id` int(6) NOT NULL,
  `title1` varchar(100) NOT NULL,
  `desc1` text NOT NULL,
  `title2` varchar(100) NOT NULL,
  `title2_img` varchar(100) NOT NULL,
  `desc2` text NOT NULL,
  `title3` varchar(100) NOT NULL,
  `title3_img` varchar(100) NOT NULL,
  `desc3` text NOT NULL,
  `title4` varchar(100) NOT NULL,
  `title4_img` varchar(100) NOT NULL,
  `desc4` text NOT NULL,
  `title5` varchar(100) NOT NULL,
  `desc5` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `startup_tab`
--

INSERT INTO `startup_tab` (`id`, `project_id`, `title1`, `desc1`, `title2`, `title2_img`, `desc2`, `title3`, `title3_img`, `desc3`, `title4`, `title4_img`, `desc4`, `title5`, `desc5`) VALUES
(1, 1, 'Introduction', 'The user will get a complete list of cards that are connected to him i.e. is in his network. The user can click on one of the card and see the profile for that particular user. Additionally, user can mark any of the connection as favourite and also do vice versa if user is already added to favourites.', 'Features', 'ifind/ifind_monitor.png', 'The user will get a complete list of cards that are connected to him i.e. is in his network. The user can click on one of the card and see the profile for that particular user. Additionally, user can mark any of the connection as favourite and also do vice versa if user is already added to favourites.', 'How It Works', 'ifind/index.png', 'Ability to create an event, attend an event and donate to event, display events or better still see lists of events to attend or host. These can either be free events or paid events.<br/>With this feature the user can create multiple independent business cards and also create a Network card in order to share his profile and work related experience this is a great tool for students and unemployed, User can quickly activate any of his card as at when he needs it and broadcast his business card/Network card to anyone using either their clamtag ID or their registered business phone number.', 'Location', 'ifind/world map.jpg', 'Manage Your Products & Services Ads Create Free & Paid Events Schedule Appointment Create Targeted Campaign Ads View Daily Local Business Leads View Daily Analyticals Manage Associate Ads Accounts Automatically Update and share Your Most recent business/Network card Print Customized Business Card Generate Event Name Tags with !clamtag Ids', 'ifindcard Gallery', 'User Can Hire Local  Artisan & High End professionals\nDirectly From Their Mobile App'),
(2, 2, 'Introduction', 'Thanks to eazytie, the challenge of making a perfect and comfortable necktie is now a thing of the past. The 3 step process by eazytie has completely revolutionize how neckties are worn by all across the globe. Take control of you business deals, corporate events and opportunities today with eazytie.', 'Features', 'eazytie/eazy.png', 'A good tie adds to a perfect detail and makes a great difference in the way a man looks. Neckties are  worn by most professional speakers, presidents, politicians corporate bankers pastors and everyone else A good tie adds to a perfect detail and makes a great difference in the way a man looks. Neckties are  worn by most professional speakers, presidents, politicians corporate bankers pastors and everyone else', 'Product', 'eazytie/index.png', 'Bring your goodlooks up to speed. Say goodbye to sloppiness and shabby looking images of yourself in business outfits. Easytie is designed, well packaged to make you more comfortable, goodlooking and presentable at all time. You can never go wrong with getting an eazytie gift for your colleague, father, friend and business partner. Make a long lasting impression in that business meeting or event with our top notch eazytie product today.', 'Quality', 'eazytie/quality.png', 'Eazytie is designed to exceed expectations from our customers all over the world. Our quality control experts have put in time for research and quality control to ensure a milestone achievement in fabric durability and comfort. Anticipating a revolution in the corporate outfit industry, Eazytie is branded to be the next big thing in the tie business and is built to add value to how you look when it matters most.', 'EazyTie Gallery', 'Eazytie   Gives  You The Smartest  Business Ties Matching  Outfit '),
(3, 3, 'Introduction', 'The user will get a complete list of cards that are connected to him i.e. is in his network. The user can click on one of the card and see the profile for that particular user. Additionally, user can mark any of the connection as favourite and also do vice versa if user is already added to favourites.', 'Features', 'oonbux/oon.png', 'Get A Free Local & International Package Delivery & Shipping Address Directly From Your Mobile Devices And Have All Your Packages Shipped & Delivered To or Your Pals "Family, Friends, Business Associates" On Time, Any Where In The World.', 'How It Works', 'oonbux/index.png', 'Simply download the Oonbux App to your mobile phone to get a free Local and International package delivery and shipping address directly from your mobile device. Take a picture of the package(s) to be shipped, enter the shipping details and receive a confirmation notice when your package arrives it destination.\n', 'Location', 'oonbux/location.png', 'Currently we have warehouses in Houston Texas, London U.K, and Lagos Nigeria. Our pioneer locations service major high traffic airports around the world, bringing solutions to excess luggage\'s and backup on packages during normal and holiday seasons.', 'OOnbux Gallery', 'Time to Own A Personalized Local & International Virtual Package Delivery ');

-- --------------------------------------------------------

--
-- Table structure for table `team_members`
--

CREATE TABLE `team_members` (
  `team_member_id` int(6) NOT NULL,
  `project_id` int(6) NOT NULL,
  `team_member_name` varchar(45) NOT NULL,
  `team_member_profession` varchar(45) NOT NULL,
  `team_member_intro` text NOT NULL,
  `team_member_photo` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `team_members`
--

INSERT INTO `team_members` (`team_member_id`, `project_id`, `team_member_name`, `team_member_profession`, `team_member_intro`, `team_member_photo`) VALUES
(1, 1, 'Emeka Adagbo', 'CEO-CO-FOUNDER', 'Is a visionary Entreprenuer  on  mission to  pioneer  life  tranformating  solutions by leveraging the strategic technological space of  mobile  and related digital solutions His early backgorund includes  Accounting, Business Adminstration and  Software  Archtecture', 'Emeka Adagbo.png'),
(2, 1, 'Dennis Ugwa', 'CO-FOUNDER', 'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.', 'Dennis Ugwa.jpg'),
(4, 1, 'Gopinath Parthasarathy', 'CTO', 'Gopinath, has master in Computer Science/Mathematics , & over 16 years of IT experience, with expertise in transportation, safety and disaster management,  project  partnered with DirectTV,  State of  California, Accenture, and Cisco', 'Gopinath Parthasarathy.png'),
(5, 1, 'Leonard Imhangbe', 'VP MARKETING', 'Leonard has Masters in Planning/Environmental policies, with over 8 years of experience, has the ability to access business implications for project phase, monitoring progress to meet deadlines, standards and cost targets is focused on advancing the adoption of wide variety of GIS, marketing and Networking operating system software, in Vineture Technologies as VP Marketing to build a value-added brand to the company\'s image.', 'Leonard Imhangbe.png'),
(6, 1, 'Segun Faphunda', '', 'Segun has been in the Retail Business for over 10 years, Segun has a proven record of business development, customer service management, and growing business relationships. His effective customer service and operations management skills blended with his strong business acumen has led to increases in revenue, profitability, and high levels of customer satisfaction in his previous and current organizations.  He has over 12 years of experience managing business with revenues in excess of $20m\r\n', 'Segun Faphunda.png'),
(7, 2, 'Emeka Adagbo ', 'CEO-CO-FOUNDER', 'Is a visionary Entreprenuer  on  mission to  pioneer  life  tranformating  solutions by leveraging the strategic technological space of  mobile  and related digital solutions His early backgorund includes  Accounting, Business Adminstration and  Software  Archtecture', 'Emeka Adagbo.png'),
(8, 2, 'Ugochi Adagbo', 'CO-FOUNDER', 'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.', 'Ugochi Adagbo.jpg'),
(9, 2, 'Leonard Imhangbe', 'VP MARKETING', 'Leonard has Masters in Planning/Environmental policies, with over 8 years of experience, has the ability to access business implications for project phase, monitoring progress to meet deadlines, standards and cost targets is focused on advancing the adoption of wide variety of GIS, marketing and Networking operating system software, in Vineture Technologies as VP Marketing to build a value-added brand to the company\'s image.', 'Leonard Imhangbe.png'),
(10, 2, 'Segun Faphunda', '', 'Mike has been in the Retail Business for over 10 years ', 'Segun Faphunda.png'),
(11, 2, 'Emeka Ojiaku', '', 'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.', 'Emeka Ojiaku.png'),
(12, 3, 'Emeka Adagbo', 'CEO-CO-FOUNDER', 'Is a visionary Entreprenuer  on  mission to  pioneer  life  tranformating  solutions by leveraging the strategic technological space of  mobile  and related digital solutions His early backgorund includes  Accounting, Business Adminstration and  Software  Archtecture', 'Emeka Adagbo.png'),
(13, 3, 'Emeka Ojiaku', 'CO-FOUNDER', 'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.', 'Emeka Ojiaku.png'),
(14, 3, 'Gopinath Parthasarathy', 'CTO', 'Gopinath, has master in Computer Science/Mathematics , & over 16 years of IT experience, with expertise in transportation, safety and disaster management,  project  partnered with DirectTV,  State of  California, Accenture, and Cisco', 'Gopinath Parthasarathy.png'),
(15, 3, 'Leonard Imhangbe', 'VP MARKETING', 'Leonard has Masters in Planning/Environmental policies, with over 8 years of experience, has the ability to access business implications for project phase, monitoring progress to meet deadlines, standards and cost targets is focused on advancing the adoption of wide variety of GIS, marketing and Networking operating system software, in Vineture Technologies as VP Marketing to build a value-added brand to the company\'s image.', 'Leonard Imhangbe.png'),
(16, 3, 'Segun Faphunda', '', 'Mike has been in the Retail Business for over 10 years', 'Segun Faphunda.png');

-- --------------------------------------------------------

--
-- Table structure for table `team_page`
--

CREATE TABLE `team_page` (
  `team_page_id` int(6) NOT NULL,
  `team_short_intro` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `team_page`
--

INSERT INTO `team_page` (`team_page_id`, `team_short_intro`) VALUES
(1, '<p>We are very passionate about what we are doing, it had not been an easy ride so far, one of our mentors once said "if you want to go fast in life go alone, but if you desire to go far and end well go together". Our dedication to success is what makes us tick. </p>');

-- --------------------------------------------------------

--
-- Table structure for table `testing`
--

CREATE TABLE `testing` (
  `testing_id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `testing_name` varchar(200) DEFAULT NULL,
  `testing_name_desc` varchar(200) DEFAULT NULL,
  `testing_status` varchar(45) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `testing`
--

INSERT INTO `testing` (`testing_id`, `project_id`, `testing_name`, `testing_name_desc`, `testing_status`) VALUES
(1, 1, 'Beta Testing', 'June 2016 ', '1'),
(2, 1, 'Launching', 'August 2016', '1'),
(3, 2, 'Next Funding Rounds', 'August 2016 ', '1'),
(4, 1, 'Deployment of Phase 2', 'January 2017', '1'),
(5, 2, 'tn12', 'may2016', '1');

-- --------------------------------------------------------

--
-- Table structure for table `traction`
--

CREATE TABLE `traction` (
  `traction_id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `traction_name` varchar(200) DEFAULT NULL,
  `traction_name_desc` varchar(200) DEFAULT NULL,
  `traction_status` varchar(45) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `traction`
--

INSERT INTO `traction` (`traction_id`, `project_id`, `traction_name`, `traction_name_desc`, `traction_status`) VALUES
(1, 1, 'Application Design / Prototyping', 'May 2016', '1'),
(2, 1, 'Patent Application', 'September 2016', '1'),
(3, 1, 'Patent Application', 'December 2015', '1'),
(4, 1, 'Application Development', 'Funding Needed', '1');

-- --------------------------------------------------------

--
-- Table structure for table `transection_tbl`
--

CREATE TABLE `transection_tbl` (
  `TID` int(11) NOT NULL,
  `investor_id` varchar(50) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `payer_email` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `amount` float NOT NULL,
  `currency` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `txn_id` varchar(100) NOT NULL,
  `txn_type` varchar(100) NOT NULL,
  `payer_id` varchar(50) NOT NULL,
  `payment_status` varchar(100) NOT NULL,
  `payment_type` varchar(100) NOT NULL,
  `payment_metod` varchar(100) NOT NULL,
  `create_date` datetime NOT NULL,
  `payment_date` datetime NOT NULL,
  `note` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transection_tbl`
--

INSERT INTO `transection_tbl` (`TID`, `investor_id`, `item_name`, `payer_email`, `first_name`, `last_name`, `amount`, `currency`, `country`, `txn_id`, `txn_type`, `payer_id`, `payment_status`, `payment_type`, `payment_metod`, `create_date`, `payment_date`, `note`) VALUES
(123123, '9632658947', 'fdg', 'gfdg', 'gfdgdf', 'gdfg', 413546, 'usd', 'us', '132fd1gdf', 'gfdg', '1d3f2g1dfgfd', 'gfdg', 'gfdg', 'gfdgfd', '2016-06-01 00:00:00', '2016-06-01 00:00:00', 'amount returned1'),
(123124, '5746c8a285d06', 'ifindcard', 'buyer@sqindia.net', 'Siva', 'Raj', 5000, 'USD', 'US', '4RS545373N599442U', 'web_accept', '9B757TPZSKKZA', 'Completed', 'instant', '', '2016-09-03 15:33:33', '2016-09-03 15:33:33', NULL),
(123125, '5746c8a285d06', 'ifindcard', 'buyer@sqindia.net', 'Siva', 'Raj', 5000, 'USD', 'US', '4RS545373N599442U', 'web_accept', '9B757TPZSKKZA', 'Completed', 'instant', '', '2016-09-03 15:39:08', '2016-09-03 15:39:08', NULL),
(123126, '5746c8a285d06', 'ifindcard', 'buyer@sqindia.net', 'Siva', 'Raj', 5000, 'USD', 'US', '4RS545373N599442U', 'web_accept', '9B757TPZSKKZA', 'Completed', 'instant', '', '2016-09-03 15:45:03', '2016-09-03 15:45:03', NULL),
(123127, '5746c8a285d06', 'ifindcard', 'buyer@sqindia.net', 'Siva', 'Raj', 5000, 'USD', 'US', '4RS545373N599442U', 'web_accept', '9B757TPZSKKZA', 'Completed', 'instant', '', '2016-09-03 15:48:16', '2016-09-03 15:48:16', NULL),
(123128, '5746c8a285d06', 'ifindcard', 'buyer@sqindia.net', 'Siva', 'Raj', 5000, 'USD', 'US', '4RS545373N599442U', 'web_accept', '9B757TPZSKKZA', 'Completed', 'instant', '', '2016-09-03 15:49:53', '2016-09-03 15:49:53', NULL),
(123129, '5746c8a285d06', 'ifindcard', 'buyer@sqindia.net', 'Siva', 'Raj', 5000, 'USD', 'US', '4RS545373N599442U', 'web_accept', '9B757TPZSKKZA', 'Completed', 'instant', '', '2016-09-03 15:52:45', '2016-09-03 15:52:45', NULL),
(123130, '5746c8a285d06', 'ifindcard', 'buyer@sqindia.net', 'Siva', 'Raj', 5000, 'USD', 'US', '4RS545373N599442U', 'web_accept', '9B757TPZSKKZA', 'Completed', 'instant', '', '2016-09-03 15:58:13', '2016-09-03 15:58:13', NULL),
(123131, '5746c8a285d06', 'ifindcard', 'buyer@sqindia.net', 'Siva', 'Raj', 5000, 'USD', 'US', '4RS545373N599442U', 'web_accept', '9B757TPZSKKZA', 'Completed', 'instant', '', '2016-09-03 16:09:09', '2016-09-03 16:09:09', NULL),
(123132, '5746c8a285d06', 'ifindcard', 'buyer@sqindia.net', 'Siva', 'Raj', 5000, 'USD', 'US', '4RS545373N599442U', 'web_accept', '9B757TPZSKKZA', 'Completed', 'instant', '', '2016-09-03 16:30:44', '2016-09-03 16:30:44', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`about_id`);

--
-- Indexes for table `competitors`
--
ALTER TABLE `competitors`
  ADD PRIMARY KEY (`competitor_id`),
  ADD KEY `competitor_fk_idx` (`project_id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`),
  ADD KEY `country` (`country`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`document_id`),
  ADD KEY `document_fk_idx` (`project_id`);

--
-- Indexes for table `double_port`
--
ALTER TABLE `double_port`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`faq_id`);

--
-- Indexes for table `faq_page`
--
ALTER TABLE `faq_page`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `full_port`
--
ALTER TABLE `full_port`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `funding`
--
ALTER TABLE `funding`
  ADD PRIMARY KEY (`fund_id`),
  ADD KEY `FOREIGNKEY_idx` (`project_id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`img_id`);

--
-- Indexes for table `investment_criteria`
--
ALTER TABLE `investment_criteria`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `partner_page`
--
ALTER TABLE `partner_page`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`partners_id`);

--
-- Indexes for table `pic_table`
--
ALTER TABLE `pic_table`
  ADD PRIMARY KEY (`req_id`);

--
-- Indexes for table `project_list`
--
ALTER TABLE `project_list`
  ADD PRIMARY KEY (`project_id`),
  ADD UNIQUE KEY `project_id_UNIQUE` (`project_id`);

--
-- Indexes for table `reg_user`
--
ALTER TABLE `reg_user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `pic_UNIQUE` (`pic`),
  ADD UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Indexes for table `single_port`
--
ALTER TABLE `single_port`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `startup_tab`
--
ALTER TABLE `startup_tab`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team_members`
--
ALTER TABLE `team_members`
  ADD PRIMARY KEY (`team_member_id`);

--
-- Indexes for table `team_page`
--
ALTER TABLE `team_page`
  ADD PRIMARY KEY (`team_page_id`);

--
-- Indexes for table `testing`
--
ALTER TABLE `testing`
  ADD PRIMARY KEY (`testing_id`),
  ADD KEY `FOREIGNKEY_idx` (`project_id`),
  ADD KEY `testing_fk_idx` (`project_id`);

--
-- Indexes for table `traction`
--
ALTER TABLE `traction`
  ADD PRIMARY KEY (`traction_id`),
  ADD KEY `traction_fk_idx` (`project_id`);

--
-- Indexes for table `transection_tbl`
--
ALTER TABLE `transection_tbl`
  ADD PRIMARY KEY (`TID`),
  ADD KEY `inv_id_fk_idx` (`investor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `about_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `competitors`
--
ALTER TABLE `competitors`
  MODIFY `competitor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `country_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `document_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `double_port`
--
ALTER TABLE `double_port`
  MODIFY `ID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `faq`
--
ALTER TABLE `faq`
  MODIFY `faq_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `faq_page`
--
ALTER TABLE `faq_page`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `full_port`
--
ALTER TABLE `full_port`
  MODIFY `ID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `funding`
--
ALTER TABLE `funding`
  MODIFY `fund_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `img_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `investment_criteria`
--
ALTER TABLE `investment_criteria`
  MODIFY `ID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `partner_page`
--
ALTER TABLE `partner_page`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `partners_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `pic_table`
--
ALTER TABLE `pic_table`
  MODIFY `req_id` int(45) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;
--
-- AUTO_INCREMENT for table `project_list`
--
ALTER TABLE `project_list`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `single_port`
--
ALTER TABLE `single_port`
  MODIFY `ID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `startup_tab`
--
ALTER TABLE `startup_tab`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `team_members`
--
ALTER TABLE `team_members`
  MODIFY `team_member_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `team_page`
--
ALTER TABLE `team_page`
  MODIFY `team_page_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `testing`
--
ALTER TABLE `testing`
  MODIFY `testing_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `traction`
--
ALTER TABLE `traction`
  MODIFY `traction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `transection_tbl`
--
ALTER TABLE `transection_tbl`
  MODIFY `TID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123133;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `competitors`
--
ALTER TABLE `competitors`
  ADD CONSTRAINT `competitor_fk` FOREIGN KEY (`project_id`) REFERENCES `project_list` (`project_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `document_fk` FOREIGN KEY (`project_id`) REFERENCES `project_list` (`project_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `funding`
--
ALTER TABLE `funding`
  ADD CONSTRAINT `funding_fk` FOREIGN KEY (`project_id`) REFERENCES `project_list` (`project_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `testing`
--
ALTER TABLE `testing`
  ADD CONSTRAINT `testing_fk` FOREIGN KEY (`project_id`) REFERENCES `project_list` (`project_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `traction`
--
ALTER TABLE `traction`
  ADD CONSTRAINT `traction_fk` FOREIGN KEY (`project_id`) REFERENCES `project_list` (`project_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `transection_tbl`
--
ALTER TABLE `transection_tbl`
  ADD CONSTRAINT `inv_id_fk` FOREIGN KEY (`investor_id`) REFERENCES `reg_user` (`pic`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
