import urllib.request
import json
from urllib.parse import quote
import pandas as pd
import datetime
import time
from functools import partial
from shapely.geometry import Polygon
import pyproj

import shapely.ops as ops
from functools import partial

class Processing:
    def _init_(self):
        self.ser = []

    def start(self, file_input):
        try:
            time_connect = datetime.datetime.now()
            xl = pd.ExcelFile(file_input)
            df = xl.parse(xl.sheet_names[0])
            self.ser = {
                'Object': df['Object'].values.tolist(),
            }
            print('Соединение => ' + str(datetime.datetime.now() -
                                         time_connect))
        except Exception as e:
            print('Ошибка! ' + str(e))

    def process(self):
        Object = self.ser['Object']
        Area = []
        time_processing = datetime.datetime.now()
        # p = pyproj.Proj(proj='utm', zone=32, ellps='WGS84')

        
        # geom = Polygon([(0, 0), (0, 10), (10, 10), (10, 0), (0, 0)])
        

        try:
            for i in range(len(Object)):
                url = ('https://nominatim.openstreetmap.org/search.php?q='
                    + quote(Object[i]) +
                    '&polygon_geojson=1&viewbox=&format=json')
                response = urllib.request.urlopen(url)
                data = json.loads(response.read())
                if not data == []:
                    lon = []
                    lat = []
                    if data[0]['geojson']['type'] == 'Point':
                        a = 0
                    elif data[0]['geojson']['type'] == 'Polygon':
                        boundes = data[0]['geojson']['coordinates'][0]
                        polygon = Polygon(boundes)
                        geom_area = ops.transform(
                            partial(
                                pyproj.transform,
                                pyproj.Proj(init='EPSG:4326'),
                                pyproj.Proj(
                                    proj='aea',
                                    lat1=polygon.bounds[1],
                                    lat2=polygon.bounds[3])),
                            polygon)
                        a = geom_area.area
                    elif data[0]['geojson']['type'] == 'MultiPolygon':
                        boundes = []
                        a = 0
                        for k in range(len(data[0]['geojson']['coordinates'])):
                            for j in range(len(data[0]['geojson']['coordinates'][k])):
                                boundes = data[0]['geojson']['coordinates'][k][j]
                                if len(boundes) >= 3:
                                    polygon = Polygon(boundes)
                                    geom_area = ops.transform(
                                        partial(
                                            pyproj.transform,
                                            pyproj.Proj(init='EPSG:4326'),
                                            pyproj.Proj(
                                                proj='aea',
                                                lat1=polygon.bounds[1],
                                                lat2=polygon.bounds[3])),
                                        polygon)
                                    a += geom_area.area
                else:
                    a = -1
                print(str(Object[i]) + ' ' + str(a))
                Area.append(a)
                # if len(boundes) >= 3:
                #     lon, lat = p(lon, lat)
                #     if len(data[0]['geojson']['coordinates']) == 2:
                #         boundes = []
                #         boundes.append([])
                #         boundes[0].append(lon[0])
                #         boundes[0].append(lat[0])
                #     else:
                #         for j in range(len(lon)):
                #             boundes[j][0] = lon[j]
                #             boundes[j][1] = lat[j]
                #     polygon = Polygon(boundes)
                #     a = polygon.area
                # else:
                #     a = 0
                # print(a)
        except:
            print('aaaa')

        self.ser = {
            'Object': Object,
            'Площадь': Area
        }
        print('Обработка => ' + str(datetime.datetime.now() -
                                    time_processing))

    def end(self, file_output):
        while(True):
            try:
                time_connect = datetime.datetime.now()
                res_pd = pd.DataFrame(self.ser)
                writer = pd.ExcelWriter(file_output)
                res_pd.to_excel(writer, 'List1')
                writer.save()
                print('Сохранение => ' + str(datetime.datetime.now() -
                                             time_connect))
                input('Сделалось. Нажмите ENTER, чтобы закончить.')
                break
            except:
                input('Ошибка! Закройте файл input, '
                      + 'если он открыт и нажмите ENTER.')


if __name__ == '__main__':
    file_input = './input.xlsx'
    file_output = './output.xlsx'

    processing = Processing()
    processing.start(file_input)
    processing.process()
    processing.end(file_output)
