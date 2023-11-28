# Flipkart Grid Hackathon Project

## Table of Contents
- [Project Overview](#project-overview)
- [Challeges I ran into](#Challenges I ran into)
- [Contracts](#contracts)

## Project Overview
Curently, E commerce stores which have loyalty based reward system are not trusted by customers and it raises the problems like thefting due to being centralised , So, this projects proposes a decentralised way to issue and spend your rewards securely using blockchain. Reward Tokens( FlipGems) which are fungible tokens on blockchain are earned by customers or shopping and social media activities, after which they can spend them to by vouchers and coupons. Also the tokens decay over time to persist our customer engagement.

## Challenges I ran into
I had a challenge on thinking how to allow users to connect to a blockchain network without their previous knowledge about it. So, after research and thorough thought , I came up with an idea of creating ethereum wallets on sign up so that every user has a own wallet for his/her token transactions.

## Contracts
The project includes the following smart contracts:

- **FlipGem.sol**: An ERC20 token contract used for rewards and coupon transactions.
- **RewardRules.sol**: Manages rewards and coupon amounts, allowing the owner to transfer rewards and deduct coupons from users' balances.

