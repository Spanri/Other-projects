set _OLD_PYTHONHOME_=%PYTHONHOME% 
set PYTHONHOME=%cd%\code\venv\
"%cd%\code\venv\Scripts\python.exe" "%cd%\code\index.py"
set PYTHONHOME=%_OLD_PYTHONHOME_% 
set PYTHONHOME=
