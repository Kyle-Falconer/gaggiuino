class PSM
{
public:
  PSM(unsigned char sensePin, unsigned char controlPin, unsigned int range, int mode, unsigned char divider, unsigned char interruptMinTimeDiff);

  void set(unsigned int value);

  long getCounter();
  void resetCounter();

  void stopAfter(long counter);

  unsigned int cps();
  unsigned long getLastMillis();
  unsigned char getDivider(void);
  void setDivider(unsigned char divider);
  void shiftDividerCounter(char value);
};
