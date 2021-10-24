import csv
import json
from youtube_transcript_api import YouTubeTranscriptApi
import sys
from algoliasearch.search_client import SearchClient
from dotenv import dotenv_values

config = dotenv_values(".env")

client = SearchClient.create(config['APPLICATION_ID'], config['ADMIN_API_KEY'])
index = client.init_index(config['INDEX_NAME'])

records = []

with open('test.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile, ['title','href','video_id','channel_name','channel_logo','channel_href'])
    for row in reader:
        transcript = YouTubeTranscriptApi.get_transcript(row['video_id'])

        for line in transcript:
            records.append({
                'title': row['title'],
                'channel_title': row['channel_name'],
                'channel_href': row['channel_href'],
                'channel_logo': row['channel_logo'],
                'href': row['href'],
                'start': line['start'],
                'text': line['text']
            })

index.save_objects(records,  {'autoGenerateObjectIDIfNotExist': True})
