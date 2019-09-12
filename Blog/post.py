import  os
import sys
import datetime
from shutil import copyfile
blogdir= sys.path[0]
postdata=sys.argv[1]
if postdata.endswith('.atxt')is False:
    print('wrong ext')
    os.system("pause")
    sys.exit(1)
dt= datetime.datetime.now()
message=dt.strftime('%Y%m%d %H:%M:%S')
filename=dt.strftime('%Y%m%d_%H%M')
filepath=blogdir+'/Text/'+filename+'.atxt'
copyfile(postdata, filepath)

a=open(filepath, 'a') 
a.write('\n[time]'+message+'[/time]')
a.close()

index=blogdir+'/index.txt'
a=open(index, 'a') 
a.write('\n'+filename)
a.close()
print('End')
os.system("pause")