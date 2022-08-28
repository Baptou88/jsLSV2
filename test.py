import struct
import logging
import sys

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    # handlers=[
    #     logging.FileHandler("debug.log"),
    #     logging.StreamHandler(sys.stdout)
    # ]
)

tel = bytearray()
tel.extend(struct.pack("!L", 162))

telegram = bytearray()

telegram.extend(struct.pack("!L", 12))
telegram.extend(map(ord, tel))

logging.debug(telegram)