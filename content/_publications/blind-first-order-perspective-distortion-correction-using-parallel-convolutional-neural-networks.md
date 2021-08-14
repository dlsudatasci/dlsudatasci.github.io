---
layout: publication
permalink: "/publication/2020-08-30-blind-first-order"
date: 2020-08-30 00:00:03 +0800
title: Blind First-Order Perspective Distortion Correction Using Parallel Convolutional
  Neural Networks
image_section:
- image: "/uploads/sensors-20-04898-g001.webp"
tags:
- convolutional neural networks
- image warping
- distortion correction
- computer vision
image_caption: Given a distorted input image, three convolutional neural networks
  are used for producing M^ transformation matrix that cause the distortion (M as
  ground-truth matrix). The distorted image is transformed to its corrected image
  by applying M^-1.
authors: Neil Patrick Del Gallego, Joel Ilao, and Macario Cordel II
source: MDPI
abstract: In this work, we present a network architecture with parallel convolutional
  neural networks (CNN) for removing perspective distortion in images. While other
  works generate corrected images through the use of generative adversarial networks
  or encoder-decoder networks, we propose a method wherein three CNNs are trained
  in parallel, to predict a certain element pair in the 3 × 3 transformation matrix,
  Mˆ . The corrected image is produced by transforming the distorted input image using
  Mˆ −1. The networks are trained from our generated distorted image dataset using
  KITTI images. Experimental results show promise in this approach, as our method
  is capable of correcting perspective distortions on images and outperforms other
  state-of-the-art methods. Our method also recovers the intended scale and proportion
  of the image, which is not observed in other works.
materials:
  publishers_copy: https://www.mdpi.com/1424-8220/20/17/4898
  pdf: "/uploads/2020-08-30-blind-first-order.pdf"
  bibtex: |-
    @Article{s20174898,
    AUTHOR = {Del Gallego, Neil Patrick and Ilao, Joel and Cordel, Macario},
    TITLE = {Blind First-Order Perspective Distortion Correction Using Parallel Convolutional Neural Networks},
    JOURNAL = {Sensors},
    VOLUME = {20},
    YEAR = {2020},
    NUMBER = {17},
    ARTICLE-NUMBER = {4898},
    URL = {https://www.mdpi.com/1424-8220/20/17/4898},
    ISSN = {1424-8220},
    DOI = {10.3390/s20174898}
    }
citations:
- text: Del Gallego, N. P., Ilao, J., & Cordel, M. (2020). Blind First-Order Perspective
    Distortion Correction Using Parallel Convolutional Neural Networks. Sensors, 20(17),
    4898. doi:10.3390/s20174898
  format: apa
- text: 'Del Gallego NP, Ilao J, Cordel M II. Blind First-Order Perspective Distortion
    Correction Using Parallel Convolutional Neural Networks. Sensors. 2020; 20(17):4898.
    https://doi.org/10.3390/s20174898 '
  format: ama
- text: 'Del Gallego, N.P.; Ilao, J.; Cordel, M., II. Blind First-Order Perspective
    Distortion Correction Using Parallel Convolutional Neural Networks. Sensors 2020,
    20, 4898. https://doi.org/10.3390/s20174898 '
  format: acs
published: false

---
