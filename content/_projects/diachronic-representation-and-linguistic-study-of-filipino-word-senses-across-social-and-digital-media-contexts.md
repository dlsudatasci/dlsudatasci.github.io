---
title: Diachronic Representation and Linguistic Study of Filipino Word Senses
  Across Social and Digital Media Contexts
date: 2021-08-17T00:00:00.000+08:00
layout: project
lead_proponent: Dr. Briane Paul Samson
co-proponents:
  - Ms. Unisse Chua
  - Dr. Charibeth Cheng
  - Mr. Ralph Regalado
partner_agencies:
  - Senti-AI
  - DOST
website_url: https://www.facebook.com/FilWordNet/
image-section:
  - /uploads/digital_media.jpg
---
Inherently tied to cultures and the communities that wield them, languages are not just words on the page. They are living, breathing entities, constantly evolving depending on how they are used in diverse contexts. Capturing this evolution, however, often proves a tremendous challenge. Resources like dictionaries are far too static to keep pace with how quickly word meanings change, especially in the online realm.

This is especially true for Filipino and other Philippine languages. Resources are scarce and at times inaccurate or too simplistic to express the nuances of word usage, particularly when these have multiple meanings or senses. Philippine languages are used fairly frequently online, and they are subject to the same forces that drive shifts in meaning in other more spoken languages, like being used in tandem with English and serving different purposes in diverse social groups.

Evidently, there is a need for developing technologies to not only document these changes as indicators of language development, but also enable creating better language-driven applications like translation tools to serve the public.

To bridge these gaps, De La Salle University researchers together with industry collaborators Senti AI are embarking on a project titled “Diachronic Representation and Linguistic Study of Filipino Word Senses Across Social and Digital Media Contexts.” The study is helmed by a team from the Center for Complexity and Emerging Technologies (COMET) and the Center for Language Technologies (CELT) from the College of Computer Studies, and is funded by Collaborative Research and Development to Leverage Philippine Economy (CRADLE) Program under the Department of Science and Technology’s Science for Change Program.

The team aims to tackle the twin challenges of lacking local resources in the first place and lacking the means to continuously update these datasets as languages evolve, focusing on building a context-aware digital lexicon for English and Filipino. This will be achieved through three major outputs: a [corpus of historical Filipino and English (COHFIE)](http://filwordnet.dlsu.edu.ph/data-collection/); a Filipino WordNet; and a temporal multiplex word co-occurrence network. To this end, the project takes a dual approach through [network science](http://filwordnet.dlsu.edu.ph/network-science/) and [natural language processing (NLP)](http://filwordnet.dlsu.edu.ph/nlp/) methods, providing an efficient mechanism for analyzing copious amounts of data.

**A Dual Approach To Identifying Word Meanings**

The team is regularly crawling the web and collecting text data for inclusion in the corpus. To ensure a diversity of sources, the target platforms include social media sites like Twitter and Reddit, online dictionaries, news sites in both English and Filipino, books like the Project Gutenberg repository. This corpus then serves as the foundation for creating the Wordnet, which acts as a lexical database, and multiplex network.

By building a word co-occurrence network, the team can easily visualize the relations between words, with each word acting as its own node in the structure. Words that co-occur or appear together in a given text are linked through edges, with the thickness of the edge or line indicating how often those words are found together. This provides an idea not just of which words could have related usages, but how strong those connections are, essentially allowing the computer to infer meaning based on neighboring words—similar to context clues. In effect, this approach lends itself to the detection of communities or clusters of words. Words with multiple meanings accordingly have several distinct branches, gathering relevant nodes together and separating them from sets conveying other meanings.

Moreover, the network contains several layers, each one representing a different platform, allowing focused analysis on a particular platform and time period. Through complex networks, the researchers can embed more details such as the source and time of posting in each node. The sense data derived from this network analysis then feeds into the Wordnet, enriching it with both updated meanings and contextual information.

Meanwhile, the NLP side of the project involves word embeddings, representations of words using a distinct series of numbers, similar to coordinates in a multi-dimensional space. These numbers are not just random, either. Instead, the coordinates enable researchers to map vectors, manipulating word senses as if they are mathematical representations. For example, subtracting the values of “man” from the representation of “king” then adding the values for “woman” would ideally give the coordinates for “queen.” These representations are vital to allow the computer to comprehend language and grasp how words can be related to each other in meaning.

As a field of artificial intelligence, NLP entails feeding input data to first train the language models, enabling subsequent application of these rules to analyze new texts. With pre-trained BERT language models, the computer understands ambiguous words—that is, infer their meanings and tag their parts of speech—based on their surrounding context. Just like the multiplex network, the senses that the NLP method is able to induce are similarly added into the Wordnet.

**From Data To Downstream Applications**

Taken together, the application of both network science and NLP methods generates more robust analyses and would be key to building a rich digital lexicon for low-resource Philippine languages. By comparing the frequency of word usage between two separate time periods, the team can track how shifts in meaning, also called semantic shifts, emerge across different platforms. A certain sense might die out over time, while new ones surge to popularity. In other cases, one sense shift might unfold on Twitter and take weeks before arriving in Reddit.

Besides capturing these sociolinguistic phenomena, the resulting contextually rich lexicon would importantly enable the development of better models of Philippine languages that power downstream applications like chatbots and translation software. By enhancing tasks like detecting topics, responding to queries, and analyzing sentiments, the project ultimately supports more accurate and dynamic technologies that can better grasp and emulate the nuances of human discourse.

*Writeup by Erinne Ong*